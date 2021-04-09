function encrypt() {
  if (document.getElementById("inputfile").files.length != 0)			//for file
  {
    var n, enkey, m, i, pt, ct, k, len, j, en1 = [];
    var en = "";
    n = document.getElementById("n").value;
    enkey = document.getElementById("enkey").value;

    var fileToLoad = document.getElementById("inputfile").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
      m = fileLoadedEvent.target.result;
      for (i = 0; i < m.length; i++)			//to convert m from char to int array
      {
        en1[i] = m.charCodeAt(i);
      }
      i = 0;
      while (i != en1.length) {
        pt = en1[i];
        pt = pt - 96;
        k = 1;
        for (j = 0; j < enkey; j++) {
          k = k * pt;
          k = k % n;
        }
        ct = k + 96;
        en = en + ct + " ";
        i++;
      }
      var x = document.getElementById("output");
      x.innerHTML = en;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
  }

  else {
    var n, enkey, m, i, pt, ct, k, len, j, en1 = [];
    var en = "";
    n = document.getElementById("n").value;
    enkey = document.getElementById("enkey").value;
    m = document.getElementById("inputtxt").value;	   //input as string

    for (i = 0; i < m.length; i++)			//to convert m from char to int array
    {
      en1[i] = m.charCodeAt(i);
    }
    i = 0;
    while (i != en1.length) {
      pt = en1[i];
      pt = pt - 96;
      k = 1;
      for (j = 0; j < enkey; j++) {
        k = k * pt;
        k = k % n;
      }
      ct = k + 96;
      en = en + ct + " ";
      i++;
    }
    var x = document.getElementById("output");
    x.innerHTML = en;
  }
}


function generate() {
  var p, q, n, t, k, flag, e = [], d = [], j, i, enckey, deckey;
  p = primegenerator(75, 200);
  q = primegenerator(73, 205);
  n = p * q;
  t = (p - 1) * (q - 1);
  k = 0;
  for (i = 2; i < t; i++) {
    if (t % i == 0)
      continue;
    flag = prime(i, j);
    if (flag == 1 && i != p && i != q) {
      e[k] = i;
      flag = cd(e[k], t);
      if (flag > 0) {
        d[k] = flag;
        k++;
      }
      if (k == 99)
        break;
    }
  }

  var ee = rand() % 20;
  enckey = e[ee];
  deckey = d[ee];
  document.getElementById("gnkey").innerHTML = "Product of prime n:" + n;
  document.getElementById("genkey").innerHTML = "Encryption key e:" + enckey;
  document.getElementById("gdekey").innerHTML = "Decryption key d:" + deckey;
}


function primegenerator(low, high) {
  var primearr = [], i, j = 0, flag = 0, secret;

  while (low < high) {
    flag = 0;
    for (i = 2; i <= low / 2; ++i) {
      if (low % i == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      primearr[j] = low;
      ++j;
    }
    ++low;
  }

  secret = rand() % (j);

  return (primearr[secret]);
}


function rand(min = 0, max = 32767) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function prime(pr, j) {
  var i;
  j = Math.sqrt(pr);
  for (i = 2; i <= j; i++) {
    if (pr % i == 0)
      return 0;
  }
  return 1;
}

function cd(x, t) {
  var k = 1;
  while (1) {
    k = k + t;
    if (k % x == 0) return (k / x);
  }
}