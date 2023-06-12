function handleTypeChange() {
  var typeSelect = document.getElementById("type");
  var additionalField = document.getElementById("additionalField");

  // Reset additional field
  additionalField.value = "";

  // Show or hide additional field based on selected type
  if (typeSelect.value === "External Jumma Collection") {
    additionalField.style.display = "block";
  } else {
    additionalField.style.display = "none";
  }
}
function generatePDF() {
    var doc = new jsPDF();

   // Add a title to the PDF
    doc.setFontSize(50);
    doc.setFontStyle('bold');
    doc.text("MASJID-E-KHASIMIAH", 10, 20);

    // Get form data
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var type = document.getElementById('type').value;
    var additional = document.getElementById('additional').value;
    var location = document.getElementById('location').value;
    var mobile = document.getElementById("mobile").value;
    var sum = document.getElementById('sum').value;
    var additionalNumber = document.getElementById('additionalNumber').value;
    var totalSum = document.getElementById('totalSum').value;
    var message = document.getElementById("message").value;
    

   // Set the table position and cell dimensions
   var tableX = 10;
   var tableY = 30;
   var cellWidth = 80;
   var cellHeight = 10;

   // Draw the table headers
   doc.setFontStyle('italic');
   doc.setFontSize(20);
   doc.text("Chanda collection Details ", tableX, tableY);
   doc.text(" FY-2023-24", tableX + cellWidth, tableY);
   doc.line(tableX, tableY + 3, tableX + cellWidth * 2, tableY + 3);

   // Draw the table rows
  
   doc.setFontStyle('normal');
   doc.setFontSize(15);
   doc.text("Receipt No:", tableX, tableY + cellHeight);
   doc.text(name, tableX + cellWidth, tableY + cellHeight);

   doc.text("Date:", tableX, tableY + cellHeight * 2);
   doc.text(date, tableX + cellWidth, tableY + cellHeight * 2);

   doc.text("Type:", tableX, tableY + cellHeight * 3);
   doc.text(type, tableX + cellWidth, tableY + cellHeight * 3);

   doc.text("Ext Masjid Name:", tableX, tableY + cellHeight * 4);
   doc.text(additional, tableX + cellWidth, tableY + cellHeight * 4);

   doc.text("Location:", tableX, tableY + cellHeight * 5);
   doc.text(location, tableX + cellWidth, tableY + cellHeight * 5);

   doc.text("Total amount in cash:", tableX, tableY + cellHeight * 6);
   doc.text(sum, tableX + cellWidth, tableY + cellHeight * 6);

   doc.text("Total amount in UPI:", tableX, tableY + cellHeight * 7);
   doc.text(additionalNumber, tableX + cellWidth, tableY + cellHeight * 7);

   doc.text("Total Sum:", tableX, tableY + cellHeight * 8);
   doc.text(totalSum, tableX + cellWidth, tableY + cellHeight * 8);

   doc.text("Message:", tableX, tableY + cellHeight * 9);
   doc.text(message, tableX + cellWidth, tableY + cellHeight * 9);

   doc.text("President Mobile No:", tableX, tableY + cellHeight * 10);
   doc.text(mobile, tableX + cellWidth, tableY + cellHeight * 10);

    // Save PDF
    doc.save('Masjid_Collection_' + date + '.pdf');
  }
