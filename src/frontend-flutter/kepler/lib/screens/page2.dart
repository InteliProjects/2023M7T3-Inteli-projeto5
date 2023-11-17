import 'package:flutter/material.dart';
import '../components/search.dart';
import '../components/board.dart';
import '../components/appbar.dart';
import 'package:logger/logger.dart';

class ResultsPage extends StatefulWidget {
  final List<String> texts;
  const ResultsPage({Key? key, required this.texts}) : super(key: key);
  
  @override
  _ResultsPageState createState() => _ResultsPageState();
}

class _ResultsPageState extends State<ResultsPage> {
  final logger = Logger();
  bool isAudioEnabled = false;
  String selectedOption = 'Venda';
  void toggleAudio() {
    setState(() {
      isAudioEnabled = !isAudioEnabled;
    });
  }

  final TextEditingController messageController = TextEditingController();

  // -------------------------------------
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage("assets/background.png"),
          fit: BoxFit.cover,
        ),
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          title: const Center(
              child: Text(
            "K  E  P  L  E  R",
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
                selected: false,
                onTap: () {
                 Navigator.pushNamed(context,'/');
                },
              ),
              ListTile(
                title: const Text('Results'),
                selected: true,
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
                },
              ),
            ],
          ),
        ),
        body: Column(
          children: [
            NavBar(),
            SearchWidget(),
            Expanded(
              // Use o widget Expanded aqui.
              child: BoardList(texts: widget.texts),
            )
          ],
        ),
      ),
    );
  }
}

void main() => runApp(MaterialApp(
      home: ResultsPage(texts: ["Teste","so"],),
    ));
