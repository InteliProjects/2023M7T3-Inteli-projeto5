// import 'package:flutter/material.dart';
// import 'package:flutter_test/flutter_test.dart';
// import 'package:mockito/mockito.dart';
// import '../lib/components/search.dart';
// class MockPostTextService extends Mock {
//   Future<String> postText(String message);
// }
// void main() {
//   late MockPostTextService mockPostTextService;

//   setUp(() {
//     mockPostTextService = MockPostTextService();
//   });

//   testWidgets('SearchWidget sends and clears message on send icon press',
//       (WidgetTester tester) async {
//     when(mockPostTextService.postText(any.toString())).thenAnswer((_) async => 'Response');

//     // Renderiza o widget
//     await tester.pumpWidget(MaterialApp(
//       home: Scaffold(body: SearchWidget()),
//     ));

//     // Encontra o TextField e o ícone de enviar
//     final textFieldFinder = find.byType(TextField);
//     final sendIconFinder = find.byIcon(Icons.send);

//     // Entra com uma mensagem no TextField
//     await tester.enterText(textFieldFinder, 'Hello');

//     // Pressiona o ícone de enviar
//     await tester.tap(sendIconFinder);
//     await tester.pumpAndSettle(); // Espera as animações e Futures

//     // Verifica se a mensagem foi enviada
//     verify(mockPostTextService.postText('Hello')).called(1);

//     // Verifica se o TextField foi limpo após o envio
//     final textField = tester.widget<TextField>(textFieldFinder);
//     expect(textField.controller!.text, '');
//   });
// }
