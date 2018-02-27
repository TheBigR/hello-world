using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebeastSample
{
    class Program
    {
        static void Main(string[] args)
        {

            int Sum = 1;
            int counter = 0;

            for (int i = 1; i < 43; i++)
			{
                counter++;
                Sum = Sum + i;
			}

            Console.WriteLine("Number of times looped: " + counter);
            Console.WriteLine("The sum of all numbers is: " + Sum);

           

        }
    }
}
