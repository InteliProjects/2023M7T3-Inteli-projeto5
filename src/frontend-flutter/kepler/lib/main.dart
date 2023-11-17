import 'package:flutter/material.dart';
import 'package:kepler/screens/page1.dart';
import 'package:kepler/screens/page2.dart';
import 'package:kepler/screens/page4.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Define the initial route
      initialRoute: '/',
      // Add routes
      routes: {
        '/': (context) => const HomePage(),
        '/results': (context) => const ResultsPage(
              texts: [""],
            ),
        '/faq': (context) => const FaqPage(),
      },
    );
  }
}
