import 'package:flutter/material.dart';
import 'package:logger/logger.dart';

class FaqPage extends StatefulWidget {
  const FaqPage({Key? key}) : super(key: key);

  @override
  _FaqState createState() => _FaqState();
}

class _FaqState extends State<FaqPage> {
  final logger = Logger();
  final List<Map<String, String>> faqList = [
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
    {
      'question': 'Lorem ipsum dolor asit met?',
      'answer':
          'Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met Lorem ipsum dolor asit met ',
    },
  ];

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
                  Navigator.pushNamed(context, '/');
                },
              ),
              ListTile(
                title: const Text('Results'),
                selected: false,
                onTap: () {
                  Navigator.pushNamed(context, '/results');
                },
              ),
              ListTile(
                title: const Text('FAQ'),
                selected: false,
                onTap: () {
                  logger.v("FAQ was clicked");
                  Navigator.pushNamed(context, '/faq');
                },
              ),
            ],
          ),
        ),
        body: Column(
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 100.0),
              child: Text(
                "FAQ",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 42.0,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ),
            SizedBox(height: 40.0),
            Flexible(
              child: Align(
                alignment: Alignment.center,
                child: ListView(
                  children: faqList
                      .map((faq) => Card(
                            color: Color.fromARGB(125, 255, 255, 255),
                            elevation: 4.0,
                            margin: const EdgeInsets.symmetric(
                                vertical: 8.0, horizontal: 16.0),
                            child: ExpansionTile(
                              iconColor: Colors.white,
                              collapsedIconColor: Colors.white,
                              title: Text(
                                faq['question']!,
                                style: TextStyle(color: Colors.white),
                              ),
                              children: <Widget>[
                                Padding(
                                  padding: const EdgeInsets.all(12.0),
                                  child: Text(
                                    faq['answer']!,
                                    style: TextStyle(color: Colors.white),
                                  ),
                                ),
                              ],
                            ),
                          ))
                      .toList(),
                ),
              ),
            ),
            SizedBox(height: 50.0),
            Text(
              "K  E  P  L  E  R",
              style: TextStyle(color: Colors.white, fontSize: 24),
            ),
            SizedBox(height: 20.0),
          ],
        ),
      ),
    );
  }
}

void main() => runApp(MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => FaqPage(),
        // Add other routes here when you create them.
      },
    ));
