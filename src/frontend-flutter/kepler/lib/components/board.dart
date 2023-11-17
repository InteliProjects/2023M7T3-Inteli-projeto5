import 'package:flutter/material.dart';

// BoardWidget é o widget para um único "board"
class BoardWidget extends StatelessWidget {
  final String text;

  const BoardWidget({
    Key? key,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      color: const Color.fromARGB(113, 255, 255, 255),
      shape: RoundedRectangleBorder(
        side: const BorderSide(color: Color.fromARGB(255, 255, 255, 255)),
        borderRadius: BorderRadius.circular(20.0),
      ),
      elevation: 4,
      margin: const EdgeInsets.all(16),
      child: Container(
        child: ListTile(
          title: Text(
            text,
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
    );
  }
}

// BoardList é o widget que cria uma lista de BoardWidgets
class BoardList extends StatelessWidget {
  final List<String> texts;

  BoardList({Key? key, required this.texts}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: texts.length,
      itemBuilder: (context, index) {
        return BoardWidget(
          text: texts[index],
        );
      },
    );
  }
}
