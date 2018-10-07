

function createTable() {
    var tableDataDivTag = document.getElementById("tableData");

    var tableTag = document.createElement("table");
    tableTag.border = 1;
    tableTag.id = "province_table";

    var trTag = document.createElement("tr");

    var tdCol1Tag = document.createElement("td");
    tdCol1Tag.innerText = "Province";

    var tdCol2Tag = document.createElement("td");
    tdCol2Tag.innerText = "Code";

    trTag.appendChild(tdCol1Tag);
    trTag.appendChild(tdCol2Tag);

    tableTag.appendChild(trTag);

    tableDataDivTag.appendChild(tableTag);

}


function addProvince() {
    var provinceNameElement = document.getElementById("text_province_name");
    var provinceCodeElement = document.getElementById("text_province_code");

    var provinceName = provinceNameElement.value;
    var provinceCode = provinceCodeElement.value;

    var provinceTable = document.getElementById("province_table");

    if (provinceTable) {

        var trTag = document.createElement("tr");

        var tdCol1Tag = document.createElement("td");
        tdCol1Tag.innerText = provinceName;

        var tdCol2Tag = document.createElement("td");
        tdCol2Tag.innerText = provinceCode;
        tdCol2Tag.onclick = editProvinceCode(tdCol2Tag);

        trTag.appendChild(tdCol1Tag);
        trTag.appendChild(tdCol2Tag);

        provinceTable.appendChild(trTag);

        provinceNameElement.value = "";
        provinceCodeElement.value = "";
        provinceNameElement.focus();


        function CreateTextBox(e) {
            var textBox = document.createElement("input");
            textBox.type = "text";
            textBox.value = tdCol1Tag.innerText;
            tdCol1Tag.innerText = "";
            tdCol1Tag.onclick = null;
            tdCol1Tag.appendChild(textBox);
            textBox.onblur = function(e) {
                tdCol1Tag.innerText = textBox.value;
                tdCol1Tag.onclick = CreateTextBox;
            };
        }

        tdCol1Tag.onclick = CreateTextBox;
    }


}


function editProvinceName(tdTag) {

    var text = tdTag.innerText;

    var textBox = document.createElement("input");
    textBox.type = "text";
    textBox.value = text;
    textBox.onblur = replaceTextBoxWithTdTag(textBox, tdTag);

    tdTag.innerText = "";
    tdTag.appendChild(textBox);
}

function replaceTextBoxWithTdTag(textBox, tdTag) {
    this.textBox = textBox;
    this.tdTag = tdTag;
    this.tdTag.innerText = this.textBox.value;
    this.tdTag.removeChild(this.textBox);
}

function editProvinceCode(tdProvinceCodeTagElement) {

}