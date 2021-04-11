     
// 1. ���� ����� ���ؼ� http ����� http ������ ��´�. (���� ������ �̸��� �޶� �ȴ�.) 
//require�� �ٸ� ����� import�� ������ ���
var http = require('http'); 

// 2. http ���� ������ �����Ѵ�.
//    �Ʒ��� ���� �ۼ��ϸ� ������ ������ ��, ����ڷ� ���� http ��û�� ������ function �������� �ڵ带 �����ؼ� �����Ѵ�.
var server = http.createServer(function(request,response){ 

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello node.js!!');

});

// 3. listen �Լ��� 8080 ��Ʈ�� ���� ������ �����Ѵ�. ������ ����� ���� �ܼ�â���� Ȯ���ϱ� ���� 'Server is running...' �α׸� ����Ѵ�
server.listen(8080, function(){ 
    console.log('Server is running...');
});

