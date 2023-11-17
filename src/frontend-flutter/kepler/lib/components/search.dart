import 'package:flutter/material.dart';
import 'package:kepler/services/postText.service.dart';

import '../screens/page2.dart';

class SearchWidget extends StatelessWidget {
  final TextEditingController messageController = TextEditingController();

  SearchWidget({super.key});
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
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 15.0),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: messageController,
              decoration: InputDecoration(
                filled: true,
                hintStyle:
                    const TextStyle(color: Color.fromARGB(125, 255, 255, 255)),
                fillColor: const Color.fromARGB(125, 255, 255, 255),
                hintText: 'Send',
                contentPadding:
                    const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(24.0),
                ),
                suffixIcon: IconButton(
                  icon: const Icon(Icons.send,
                      color: Color.fromARGB(255, 255, 255, 255), size: 24.0),
                  onPressed: () async {
                    // Ação ao pressionar o ícone de enviar
                    _showLoadingDialog(context);
                    String message = messageController.text;
                    List<String> texts = await postText(message);
                    
                    Navigator.pop(context);
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => ResultsPage(texts: texts),
                      ),
                    );
                    await Future.delayed(Duration(seconds: 1));
                    print('Mensagem enviada: $message');
                    messageController.clear();
                  },
                ),
              ),
            ),
          ),

          // Espaçamento entre o campo de texto e o botão
          const SizedBox(width: 10),

          // Botão de enviar
        ],
      ),
    );
  }
}
