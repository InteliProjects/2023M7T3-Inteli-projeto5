#producer
import pika
#declaring the credentials needed for connection like host, port, username, password, exchange etc
credentials = pika.PlainCredentials('guest','guest')
connection= pika.BlockingConnection(pika.ConnectionParameters(host='localhost', credentials= credentials))
channel= connection.channel()
channel.exchange_declare('test', durable=True, exchange_type='topic')
channel.queue_declare(queue= 'A')
channel.queue_bind(exchange='test', queue='A', routing_key='A')
channel.queue_declare(queue= 'B')
channel.queue_bind(exchange='test', queue='B', routing_key='B')

message= 'hello consumer!!!!!'
channel.basic_publish(exchange='test', routing_key='B', body= message)
channel.close()
