<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Asinc Await</title>
    <style type="text/css">
        body {
            margin: 20px;

        }

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>

</head>
<body>

<div class="container" id="container">

</div>
<script async>
    /*

    Задание:

      Написать при помощи async-await скрипт, который:

      Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
      Перебирает, выводит табличку:

      Company | Balance | Показать дату регистрации | Показать адресс |
      1. CompName 2000$ button button

      Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

  */

    async function getCompanies() {
        var companyHead = ['Company', 'Balance', 'Показать дату регистрации', 'Показать адресс']

        const getCompanyResponse = await fetch("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");
        const company = await getCompanyResponse.json();

        var countCompany = company.length;
        var table = document.createElement('table');
        table.classList.add('table')
        container.appendChild(table);
        // document.write('<div className="company-table"><table className="table">');

        var thead = document.createElement('thead');
        table.appendChild(thead);

        var tbody = document.createElement('tbody');
        table.appendChild(tbody);

        var tr = document.createElement('tr');
        thead.appendChild(tr);

        // in table thead
        for (var j = 0; j < 4; j++) {
            var th = document.createElement('th');

            tr.appendChild(th);
            th.innerHTML = companyHead[j];
            // console.log(th)
        }

        //in table tbody
        for (var i = 0; i < countCompany; i++) {
            var name = company[i].company;
            var balance = company[i].balance;
            var registered = company[i].registered;
            var address = company[i].address;

            var td = document.createElement('td');
            var tr = document.createElement('tr');

            tr.appendChild(td);
            tbody.appendChild(tr);
            td.innerHTML = name;
//balance in table
            var td1 = document.createElement('td');
            tr.appendChild(td1);
            td1.innerHTML = balance;
//registered in table
            var td2 = document.createElement('td');
            tr.appendChild(td2);
            td2.innerHTML = registered;
//address in table
            var td3 = document.createElement('td');
            tr.appendChild(td3);



            // var x = td3.innerHTML = 'city: ' + address.city + address.zip + address.country + address.state + address.street + address.house ;
            // console.log(x);

            for (var prop in address) {
                var output = [];
                // console.log("obj." + prop + " = " + address[prop]);
                console.log('Значение: '+  address[prop]);

            }
            td3.innerHTML = address[prop];
            // console.log(company[i], 'asdasdasd')


            console.log(address.city)
            // console.log(tr);
            // document.write('<tr className="mess-hide"><td className="name"><h4>' + name + '</h4></td><td className="song"><h4>' + balance );
        }

        return company;
    }

    var showCompany = getCompanies();

    showCompany.then(data => console.log('Companies:', data));


</script>
</body>
</html>


