const question = [
  //C语言程序设计
  //单选题10道
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '已知有变量定义：int a;char c;用scanf(“%d%c”,&a,&c);语句给a和c输入数据，使30存入a，字符‘b’存入c，则正确的输入是（）',
    A: '30’b’<回车>',
    B: '30  b<回车>',
    C: '30<回车>b<回车>',
    D: '30b<回车>',
    answer: 'D'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '若x=0，y=3，z=3,以下表达式值为0的是（）',
    A: '!x',
    B: 'x<y? 1:0 ',
    C: 'x%2&&y==z',
    D: 'y=x||z/3',
    answer: 'C'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '若w=1,x=2,y=3,z=4,则条件表达式w<x?w:y<z?y:z的结果为（）',
    A: '4',
    B: '3',
    C: '2',
    D: '1',
    answer: 'D'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '设i和x都是int类型，则for循环语句for(i=0,x=0;i<=9&&x!=876;i++) scanf("%d",&x);（）',
    A: '最多执行10次',
    B: '最多执行9次',
    C: '是无限循环',
    D: '循环体一次也不执行',
    answer: 'A'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: 'C语言的基本构成单位是（）',
    A: '函数',
    B: '函数和过程',
    C: '超文本过程',
    D: '子程序',
    answer: 'A'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '一个C语言程序总是从（）开始执行。',
    A: '主过程',
    B: '主函数',
    C: '子程序',
    D: '主程序',
    answer: 'B'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '以下叙述不正确的是（）',
    A: '在C程序中，语句之间必须要用分号";"分隔',
    B: '若a是实型变量，C程序中a=10是正确的，因为实型变量中允许存放整型数',
    C: '在C程序中，无论是整数还是实数都能正确无误地表示',
    D: '在C程序中，%是只能用于整数运算的运算符',
    answer: 'C'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '以下不正确的C语言标识符是（）',
    A: 'ABC',
    B: 'abc',
    C: 'a_bc',
    D: 'ab.c',
    answer: 'D'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '下列字符串是标识符的是（）',
    A: '_HJ',
    B: '9_student',
    C: 'long',
    D: 'LINE 1',
    answer: 'A'
  },
  {
    type: 'C语言程序设计',
    questiontype: '单选题',
    question: '在C语言中，字符型数据在内存中以（）形式存放',
    A: '原码',
    B: 'BCD码',
    C: '反码',
    D: 'ASCII码',
    answer: 'D'
  },
  //多选题5道
  {
    type: 'C语言程序设计',
    questiontype: '多选题',
    question: 'Java程序的种类有（）',
    A: 'Class',
    B: 'Applet',
    C: 'Application',
    D: 'Servlet',
    answer: 'B,C,D'
  },
  {
    type: 'C语言程序设计',
    questiontype: '多选题',
    question: '下列说法正确的有（）',
    A: '环境变量可在编译source code时指定',
    B: '在编译程序时，所能指定的环境变量不包括class path',
    C: 'javac一次可同时编译数个Java源文件',
    D: 'javac.exe能指定编译结果要置于哪个目录（directory）',
    answer: 'B,C,D'
  },
  {
    type: 'C语言程序设计',
    questiontype: '多选题',
    question: '下列标识符不合法的有（）',
    A: 'new',
    B: '$Usdollars',
    C: '1234',
    D: 'car.taxi',
    answer: 'A,C,D'
  },
  {
    type: 'C语言程序设计',
    questiontype: '多选题',
    question: '下列说法错误的有（）',
    A: '数组是一种对象',
    B: '数组属于一种原生类',
    C: 'int number=[]={31,23,33,43,35,63}',
    D: '数组的大小可以任意改变',
    answer: 'B,C,D'
  },
  {
    type: 'C语言程序设计',
    questiontype: '多选题',
    question: '不能用来修饰interface的有（）',
    A: 'private',
    B: 'public',
    C: 'protected',
    D: 'static',
    answer: 'A,C,D'
  },
  //填空题5道
  {
    type: 'C语言程序设计',
    questiontype: '填空题',
    question: '在C语言中，字符型数据和整型数据之间可以通用，一个字符数据既能以字符输出，也能以_________输出。',
    answer: '整数'
  },
  {
    type: 'C语言程序设计',
    questiontype: '填空题',
    question: '构成数组的各个元素必须具有相同的_________',
    answer: '数据类型'
  },
  {
    type: 'C语言程序设计',
    questiontype: '填空题',
    question: '若a=5，b=6，c=7，d=8,则表达式d=a/2&&b==c||!a的值为_________',
    answer: '0'
  },
  {
    type: 'C语言程序设计',
    questiontype: '填空题',
    question: '定义  int x=10,y,z;执行y=z=x;x=y==z后,变量x的值为_________',
    answer: '1'
  },
  {
    type: 'C语言程序设计',
    questiontype: '填空题',
    question: '一个C源程序至少包含一个_________，即main函数。',
    answer: '主函数'
  },
  //编程题2道
  {
    type: 'C语言程序设计',
    questiontype: '编程题',
    question: '将一个数组中的元素按逆序重新存放。',
    answer: ` #include <stdio.h>
              #define  N  7
              void   main()
              { 
                int a[N]={12,9,16,5,7,2,1},k,s;
                printf("\n初始数组:\n");
                for (k=0;k<N;k++)
                  printf("%4d",a[k]);
                for (k=0;k<N/2;k++)
                  {  s=a[k]; a[k]=a[N-k-1];a[k]=s; }
                printf("\n交换后的数组:\n");
                for (k=0;k<N;k++)
                  printf("%4d",a[k]);
              }
    `
  },
  {
    type: 'C语言程序设计',
    questiontype: '编程题',
    question: '找出10个字符串中的最大者。',
    answer: ` #include <stdio.h>
              #include <string.h>
              #define N 10
              void main()
              { char str[20],s[N][20];
                int i;
                for (i=0;i<N;i++)
                  gets(s[i]);
                strcpy(str,s[0]);
                for(i=1;i<N;i++)
                  if (strcmp(s[i],str)>0) strcpy(str,s[i]);
                printf("The longest string is : \n%s\n",str);
              } 
    `
  },
  //问答题2道
  {
    type: 'C语言程序设计',
    questiontype: '问答题',
    question: '关键字和一般标识符有什么不同。',
    answer: '标识符是用来标识某个对象的名字的；关键字可以定义变量，表达语句功能和对文件的预处理，关键字已被编译系统扎占用，不能用来做标识符'
  },
  {
    type: 'C语言程序设计',
    questiontype: '问答题',
    question: '字符数组和字符串是否相同？若不同他们又有何区别',
    answer: '不相同，C语言中没有专门的字符串变量，如果要将字符串放在变量中，必须使用字符数组，即使用一个数组来存放字符串'
  },
  //Java语言程序设计
  //单选题10道
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: '下列不可作为java语言修饰符的是（）',
    A: 'a1',
    B: '$1',
    C: ' _1',
    D: '11',
    answer: 'D'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: '有一段java 应用程序，它的主类名是a1，那么保存它的源文件名可以是（）',
    A: 'a1.java',
    B: 'a1.class',
    C: 'a1',
    D: '都对',
    answer: 'A'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: '整型数据类型中，需要内存空间最少的是（）',
    A: 'short',
    B: 'long',
    C: 'int',
    D: 'byte',
    answer: 'D'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: 'Java 类可以作为（）',
    A: '类型定义机制',
    B: '数据封装机制',
    C: '类型定义机制和数据封装机制',
    D: '上述都不对',
    answer: 'C'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: '在创建对象时必须（）',
    A: '先声明对象，然后才能使用对象',
    B: '先声明对象，为对象分配内存空间，然后才能使用对象',
    C: '先声明对象，为对象分配内存空间，对对象初始化，然后才能使用对象',
    D: '上述说法都对',
    answer: 'C'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: '在调用方法时，若要使方法改变实参的值，可以（）',
    A: '用基本数据类型作为参数',
    B: '用对象作为参数',
    C: 'A和B都对',
    D: 'A和B都不对',
    answer: 'B'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: 'Java语言具有许多优点和特点，哪个反映了Java程序并行机制的特点？（）',
    A: '安全性',
    B: '多线性',
    C: '跨平台',
    D: '可移植',
    answer: 'B'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: 'Character流与Byte流的区别是（）',
    A: '每次读入的字节数不同',
    B: '前者带有缓冲，后者没有',
    C: '前者是字符读写，后者是字节读写',
    D: '二者没有区别，可以互换使用',
    answer: 'C'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: '以下声明合法的是（）',
    A: 'default  String  s；',
    B: 'public  final  static  native  int  w( )',
    C: 'abstract  double  d；',
    D: 'abstract  final  double  hyperbolicCosine( )',
    answer: 'D'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '单选题',
    question: '在Java中，一个类可同时定义许多同名的方法，这些方法的形式参数个数、类型或顺序各不相同，传回的值也可以不相同。这种面向对象程序的特性称为（）',
    A: '隐藏',
    B: '覆盖',
    C: '重载',
    D: 'Java不支持此特性',
    answer: 'C'
  },
  //多选题5道
  {
    type: 'Java语言程序设计',
    questiontype: '多选题',
    question: 'Java程序的种类有（）',
    A: 'Class',
    B: 'Applet',
    C: 'Application',
    D: 'Servlet',
    answer: 'B,C,D'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '多选题',
    question: '下列说法正确的有（）',
    A: '环境变量可在编译source code时指定',
    B: '在编译程序时，所能指定的环境变量不包括class path',
    C: 'javac一次可同时编译数个Java源文件',
    D: 'javac.exe能指定编译结果要置于哪个目录（directory）',
    answer: 'B,C,D'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '多选题',
    question: '下列标识符不合法的有（）',
    A: 'new',
    B: '$Usdollars',
    C: '1234',
    D: 'car.taxi',
    answer: 'A,C,D'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '多选题',
    question: '下列说法错误的有（）',
    A: '数组是一种对象',
    B: '数组属于一种原生类',
    C: 'int number=[]={31,23,33,43,35,63}',
    D: '数组的大小可以任意改变',
    answer: 'B,C,D'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '多选题',
    question: '不能用来修饰interface的有（）',
    A: 'private',
    B: 'public',
    C: 'protected',
    D: 'static',
    answer: 'A,C,D'
  },
  //填空题5道
  {
    type: 'Java语言程序设计',
    questiontype: '填空题',
    question: '在Java中若定义抽象类则需要加关键字_________来修饰',
    answer: 'abstract'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '填空题',
    question: '在子类中定义与父的相同的方法,若在多个子类中定义相同的方法，则可以调用不同子类中的相同方法而实现不同的功能，这实现了程序运行时的_________',
    answer: '多态'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '填空题',
    question: '_________管理器是管理构件放置在容器中的位置和构件的大小',
    answer: '布局'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '填空题',
    question: '已知：int a[ ]={2,4,6,8};  则：表达式(a[0]+=a[1])+ ++a[2]值为_________',
    answer: '13'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '填空题',
    question: '在子类中调用父类的无参构造方法是_________',
    answer: 'super()'
  },
  //编程题2道
  {
    type: 'Java语言程序设计',
    questiontype: '编程题',
    question: '编写一个程序，求1!+2!+…+10!的值。',
    answer: ` public class test {
                public static void main(String[] args) {
                  double s=0,fact=1;
                  int i;
                  for(i=1;i<=10;i++)
                  {
                    fact=fact*i;
                    s+=fact;
                  }
                  System.out.println("s="+s);
                }
              }   
  `
  },
  {
    type: 'Java语言程序设计',
    questiontype: '编程题',
    question: '调用类java.lang.Math的成员方法“public static double random()”运算下面表达式10000次，(int) (Math.random()*20+0.5)统计其中生成的整数0,1，2，…,20的个数分别是多少，并输出统计结果。',
    answer: ` public class Count
              {
                public static void main(String[] args)
                {
                  int c[]=new int[21];
                  int i,ran;
                  for(i=0;i<c.length;i++)
                  {
                    c[i]=0;
                  }
                  for(i=0;i<10000;i++)
                  {
                    ran=(int)(Math.random()*20+0.5);
                    c[ran]++;
                  }
                  for(i=0;i<c.length;i++)
                  System.out.println(i+" 出现的次数是： "+c[i]);
                }
              }
    `
  },
  //问答题2道
  {
    type: 'Java语言程序设计',
    questiontype: '问答题',
    question: '定义一个类需要包含什么元素？',
    answer: '一个类包含属性和方法，属性表示该类具有那些特征，方法用来表示该类的行为。'
  },
  {
    type: 'Java语言程序设计',
    questiontype: '问答题',
    question: '什么时候为类中的实例变量分配空间?',
    answer: '在使用类创建实例对象时会为其分配内存空间，即使用new关键字和构造函数为其实例化时。'
  },
]

module.exports = question