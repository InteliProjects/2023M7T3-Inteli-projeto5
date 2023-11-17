import 'package:flutter/material.dart';

class SwitchWidget extends StatefulWidget {
  const SwitchWidget({Key? key}) : super(key: key);
  @override
  _SwitchWidgetState createState() => _SwitchWidgetState();
}
class _SwitchWidgetState extends State<SwitchWidget> {
  
  bool isMarketingSelected = true;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Sales',
            style: TextStyle(color: Colors.white, fontSize: 16.0),
          ),
          Switch(
            value: isMarketingSelected,
            onChanged: (bool value) {
              setState(() {
                isMarketingSelected = value;
              });
            },
            activeColor:
                Colors.blue, // Cor da bolinha quando o Switch está ligado
            activeTrackColor: Colors.white,
            inactiveThumbColor:
                Colors.blue, // Cor da bolinha quando o Switch está desligado
            inactiveTrackColor:
                Colors.white, // Cor do fundo quando o Switch está desligado
          ),
          Text(
            'Marketing',
            style: TextStyle(color: Colors.white, fontSize: 16.0),
          ),
        ],
      ),


    );
  }

}
  
  
