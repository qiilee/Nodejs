nodejs��β���cookie��session�����������м��


1��npm install express xtpl xtemplate �����Ǳ���ÿ�ζ�д,����ʹ������
   
   npm init ->  npm install express --save ->npm install xtpl --save ��ʱ��package.json��dependencies����������
  
   ��û��node_mondulesʱ��ʹ��npm install�Ϳ���������ǰ�ļ���package.json�е�dependencies�е��������װnode_mondules

   ������Ŀ��ʱ�򣬲�Ҫnode_mondules��ֻҪpackage.json����

   
2����д��server.js�е����ݣ�����ģ��󣬽�html�ļ���Ϊxtpl�ļ�������ִ��nodemon server.js����

3������localhost:3000����nodejs����������ȫ·�ɣ����������⣬�޸�xtpl�ļ��е�·������

4����ʱ�����������Ѿ�û���⣬Ȼ����index.xtpl�����cookie��Ȼ��ˢ��ҳ�棬��network������һ�������headers�п����ҵ�cookie

   ע�����⣬��ʱ��������indexҳ������cookie������ҳ��Ҳ�У���Ϊ����ͬһ�����У�cookie���ݸ��������ˣ���server.js

5����server.jsдһ���м�����������տͻ��˵�cookie

   �м���������������������Ӧ��������һЩ����

   req.headers������ͷ

6���м���Ѿ���������ˣ���www.npmjs.com������cookie-parser,��ʹ�ý���

    ʹ��npm install cookie-parser --save��װ�ϣ��ٽ������룬�ٵ��ã�use��

7�����ǵ�ԭ����name=itcast�ַ��������ϵ��м��תΪ{name:'itcast'}����

8��������Ҳ��������cookie��res.cookie('age', 18);��network�е�response�в鿴cookie
   �Ѿ����úõ�cookie���������������ģ�����ʹ��req.cookies����              


9�����������ǽ�������session��express-session
   ��װ npm install express-session --save,ͨ���鿴�ĵ�ʹ��
     
10��app.use(session({
    secret: 'itcast'
}));
    �����������м����ɾ����  console.log(req.session);Ϊundefined

11��NodeJS��session�Ǵ����ڴ���ģ�����һ������������ session �ͻᶪʧ��
    
    ��/blog·��������session����/��ҳ��ȡsession�������������󣬵����ҳ��ť
    ������sex = '��'�����ǵ��blog�󣬾Ͷ�����

12��·���� res.render('index', {name: 'it'});���õ�ֵ���ڶ�Ӧ��xtpl�ļ���
   ʹ��{{}}���Խ���

13��// ��������ȫ�ֵ�����
// ��ģ�������п��Ա�ȫ��ʹ��
app.locals = {age: 12};
��xtpl�ļ���{{age}}����

locals��express����ṩ�õģ�ֱ��ʹ�ü���
 