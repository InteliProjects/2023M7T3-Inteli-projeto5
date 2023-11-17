import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:kepler/screens/page2.dart';
import '../components/switch.dart';
import '../components/search.dart';
import 'package:record/record.dart';
import '../models/audioProcess.model.dart';
import 'package:audioplayers/audioplayers.dart';
import '../services/postAudio.service.dart';
import 'package:logger/logger.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
// LOGS
  final logger = Logger();

  bool isRecording = false;

  bool isMarketingSelected = true;
  final AudioPlayer audioPlayer = AudioPlayer();
  final Record audioRecord = Record();
  final TextEditingController messageController = TextEditingController();
  String response = "Waiting...";
  String audioPath = "";
  int statusCode = 0;

  void dispose() {
    audioRecord.dispose();
    audioPlayer.dispose();
    super.dispose();
  }

  Future<void> startRecording() async {
    try {
      if (await audioRecord.hasPermission()) {
        await audioRecord.start();
        setState(() {
          isRecording = true;
          response = "Waiting...";
          print(response);
        });
      }
    } catch (e) {
      throw Exception("Error: $e");
    }
  }

  Future<void> stopRecording() async {
    try {
      String? path = await audioRecord.stop();

      setState(() {
        isRecording = false;
        audioPath = path!;
        print("audio: " + audioPath);
      });
    } catch (e) {
      throw Exception("Error: $e");
    }
  }

  Future<void> processAudio() async {
    try {
      _showLoadingDialog(context); // Mostrar diálogo de carregamento

      List<String> texts = await postAudio(audioPath);
      print("page1 = ");
      print(texts);
      Navigator.pop(context); // Fechar diálogo de carregamento

      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => ResultsPage(texts: texts),
        ),
      );
    } catch (error) {
      Navigator.pop(context); // Fechar diálogo de carregamento em caso de erro
      // Você também pode mostrar uma mensagem de erro ao usuário
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Deu erro!")),
      );
    }
  }

  void _showConfirmationDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(
            'Confirmation',
            textAlign: TextAlign.center,
          ),
          content: Text('Do you want to search what you spoke?'),
          actions: [
            TextButton(
              child: Text('Cancel'),
              onPressed: () {
                logger.v("Canceled search"); // Log
                Navigator.of(context).pop(); // Fecha o modal
              },
            ),
            TextButton(
              child: Text('Confirm'),
              onPressed: () {
                logger.v("Confirmed search"); 
                Navigator.of(context).pop(); // Fecha o modal
                processAudio();
              },
            ),
          ],
        );
      },
    );
  }

  void _showLoadingDialog(BuildContext context) {
    showDialog(
      context: context,
      barrierDismissible: false, // impede que o usuário feche o diálogo
      builder: (BuildContext context) {
        return Dialog(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                CircularProgressIndicator(),
                SizedBox(width: 40),
                Text("Processing..."),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage("assets/background.png"),
          fit: BoxFit.cover,
        ),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          title: Center(
              child: Text(
            "",
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w400),
          )),
          backgroundColor: Colors.transparent,
          elevation: 0.0,
        ),
        drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: [
              const DrawerHeader(
                decoration: BoxDecoration(
                  color: Color.fromARGB(255, 6, 35, 59),
                ),
                child: Text('Menu',
                style: TextStyle(color: Colors.white)),
              ),
              ListTile(
                title: const Text('Home'),
                selected: true,
                onTap: () {
                  Navigator.pushNamed(context,'/');
                },
              ),
              ListTile(
                title: const Text('Results'),
                selected: false,
                onTap: () {
                  Navigator.pushNamed(context,'/results');
                },
              ),
              ListTile(
                title: const Text('FAQ'),
                selected: false,
                onTap: () {
                  logger.v("FAQ was clicked"); 
                  Navigator.pushNamed(context,'/faq');
                  logger.v("FAC was clicked"); 
                  
                },
              ),
            ],
          ),
        ),
        body: Center(
          child: Stack(
            children: <Widget>[
              GestureDetector(
                onTapDown: (details) {
                  startRecording();
                },
                onTapUp: (details) async {
                  await stopRecording();
                  _showConfirmationDialog(context);
                },
                onTapCancel: () async {
                  await stopRecording();
                  _showConfirmationDialog(context);
                },
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: EdgeInsets.all(12.0),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 2.0),
                        boxShadow: isRecording
                            ? [
                                BoxShadow(
                                  blurRadius: 5.0,
                                  color: Color.fromARGB(125, 255, 255, 255),
                                  spreadRadius: 2.0,
                                ),
                              ]
                            : [],
                      ),
                      child: Icon(
                        Icons.mic,
                        size: 50.0,
                        color: isRecording
                            ? Color.fromARGB(125, 255, 255, 255)
                            : Colors.white,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text(
                      "Hold to Record",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 24.0,
                      ),
                    ),
                    SizedBox(height: 20),
                    SwitchWidget(),
                    SearchWidget(),
                  ],
                ),
              ),
              Positioned(
                bottom: 10,
                right: 0,
                left: 0,
                child: Text(
                  "K  E  P  L  E  R",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void main() => runApp(MaterialApp(
        home: HomePage(),
      ));
}
