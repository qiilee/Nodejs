1����ʼ��ʱ���ֻ��admin��home�����ļ��У��Լ��½�server.js����ʹ��npm init ����package.json(�൱��һ��˵���ļ�)

2������ʹ��npm install express xtpl xtemplate cookie-parser express-session --save ���ذ�װ������

3���½�views����views�������½�admin��home��Ȼ���admin��home�е�html�ļ��ŵ�views�еĶ�Ӧ�ļ���

4���½�public����public�������½�admin��home��Ȼ���admin��home�о�̬��Դ�ŵ�public�еĶ�Ӧ�ļ���

5��ɾ��ԭʼ��admin��home

6������express��ܣ�cookie-parser��express-session�����м�������þ�̬��Դ��ģ��Ŀ¼�Լ�ģ�����棬·��
   
7���½�routes�ļ��У��������½�admin.js��home.js��ר�ŵ�������·��

8��app.get('/admin',(req,res)=>{
       res.render('admin/index',{});
   })
   ����views�µ�admin�µ�index

9����routes�µ�admin.jsʹ�� ��·���м���� ר�ŵĹ��� ����·��   ·���м������ Express �ṩ

10����server.js����·���м��
    // ·���м��
    const admin = require('./routes/admin');
     const home = require('./routes/home');

11��




   ������03 30���Ӵ�