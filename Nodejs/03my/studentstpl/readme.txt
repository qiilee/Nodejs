render add list�����ǹ̶��õģ����Լ���
��������ת���ַ���  JSON.stringify([].push(formData))

���� 
1 ������app.js ʵ��1-6��
2 ���ǰ�װ������art-template��npm install art-template + const template = require����art-template���� ��
3 ��װ��Ⱦ���� ����server.on��res.render=function(){}��
4 ���views��public�ļ���  ��·���ŵ�switch��
5 template.config('base',path.join(__dirname,'views'));//������Ϊ�˲�����switch���ظ���дviews
6 ����path fs  ��װ������mime
7 ʵ��default  �����case  '/save' ���ձ��ύ������
8 ����querystring ����database������students�����������    