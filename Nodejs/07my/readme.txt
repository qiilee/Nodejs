1 ����������ܾ���xtpl�ļ��е�href��·����.��ɵ�

2 ʹ��Nodejs���տͻ��˵�cookie

3 homeһ��ָǰ̨����  admin ��̨

4 let pathname = url.parse(req.url).pathname;
node.js�е�url.parse����ʹ��˵��

һ��URL�ַ���ת���ɶ��󲢷��ء�

�﷨��

���ƴ��� ��������:
url.parse(urlStr, [parseQueryString], [slashesDenoteHost])

���ղ�����

urlStr url�ַ���

parseQueryString Ϊtrueʱ��ʹ�ò�ѯģ�������ѯ�ַ�����Ĭ��Ϊfalse

slashesDenoteHost

Ĭ��Ϊfalse��//foo/bar ��ʽ���ַ����������ͳ� { pathname: ��//foo/bar' }

������ó�true��//foo/bar ��ʽ���ַ����������ͳ� { host: ��foo', pathname: ��/bar' }

