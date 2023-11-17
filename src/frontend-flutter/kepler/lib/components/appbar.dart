import 'package:flutter/material.dart';

class NavBar extends StatefulWidget {
  const NavBar({Key? key}) : super(key: key);

  @override
  _NavBarState createState() => _NavBarState();
}

class _NavBarState extends State<NavBar> {
  // Variáveis
  bool isAudioEnabled = false;
  String selectedOption = 'Venda';
  int selectedIndex = 0;

  // Opções do Menu
  static const List<Widget> _widgetOptions = <Widget>[
    Text(
      'Perguntar',
      style: TextStyle(color: Colors.white),
    ),
    Text(
      'Resposta',
      style: TextStyle(
        color: Colors.white,
      ),
    ),
    Text(
      'Suporte',
      style: TextStyle(
        color: Colors.white,
      ),
    ),
  ];

  // Função para alterar a aba selecionada
  void onItemTapped(int index) {
    setState(() {
      selectedIndex = index;
    });
  }

  // Função para alternar o áudio
  void toggleAudio() {
    setState(() {
      isAudioEnabled = !isAudioEnabled;
    });
  }

  // Componente
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 20.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Ícone de som
          Ink(
            decoration: const ShapeDecoration(
              shape: CircleBorder(
                side: BorderSide(
                  color: Color.fromARGB(255, 248, 248, 248),
                  width: 2,
                ),
              ),
            ),
            child: IconButton(
              icon: Icon(
                isAudioEnabled ? Icons.volume_up : Icons.volume_off,
                color: Colors.white,
              ),
              onPressed: toggleAudio,
            ),
          ),

          // Toggle Switch
          Row(
            children: [
              Text(
                'V',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
              Switch(
                value: selectedOption == 'Venda',
                onChanged: (value) {
                  setState(() {
                    selectedOption = value ? 'Venda' : 'Marketing';
                  });
                },
                activeColor: Colors.blue, // Cor quando ativado
                inactiveThumbColor:
                    Colors.grey, // Cor do polegar quando desativado
              ),
              Text(
                'M',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
