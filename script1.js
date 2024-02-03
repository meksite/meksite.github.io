let receiptCounter;

document.addEventListener('DOMContentLoaded', function () {
    // Initialize receiptCounter from localStorage or default to 1
    receiptCounter = parseInt(localStorage.getItem('receiptCounter')) || 1;

    // Display the current receipt number in the editable receipt number field
    const receiptNumberField = document.getElementById('receiptNumber');
    receiptNumberField.value = receiptCounter;
    receiptNumberField.removeAttribute('readonly');
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the element by its ID
    const receiptContainer = document.getElementById("generatedReceiptContainer");

    // Set the background image dynamically
    receiptContainer.style.backgroundImage = "url('path/to/your/image.jpg')";
    receiptContainer.style.backgroundSize = "cover"; // or 'contain' depending on your preference
    receiptContainer.style.backgroundRepeat = "no-repeat";
    receiptContainer.style.backgroundPosition = "center center";
});


function generateReceipt() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const receivedBy = document.getElementById('receivedBy').value;
    const signature = document.getElementById('signature').value;

    const generatedReceipt = `
        <div style="width: 5in; height: 3.5in; border: 2px solid #008000; padding: 10px; font-size: 14px;">
            <h2 style="text-align: center; font-size: 30px; margin-bottom: 0;">MASJID-E-KHASIMIAH</h2>
            <h3 style="text-align: center; font-size: 10px; margin-top: 0;"> No.8 church road, Murugesh Palya, Bangalore-560017<h3>
            <p><strong>Receipt Number:</strong> ${receiptCounter}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Amount:</strong> ₹${amount}</p>
            <p><strong>Received By:</strong> ${receivedBy}</p>
            <p><strong>Signature:</strong> ${signature}</p>
        </div>
    `;

    // Update the receiptCounter and store it in localStorage
    receiptCounter++;
    localStorage.setItem('receiptCounter', receiptCounter);

    document.getElementById('generatedReceipt').innerHTML = generatedReceipt;
}

function downloadReceipt() {
    const receiptContent = document.getElementById('generatedReceipt');

    html2canvas(receiptContent, {
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        const currentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format
        const fileName = `Receipt_No.${receiptCounter}_${currentDate}.png`;

        link.href = imgData;
        link.download = fileName;
        link.click();
    });
}

function resetReceiptCounter() {
    // Reset the receiptCounter and update the receipt number field
    receiptCounter = 1;
    localStorage.setItem('receiptCounter', receiptCounter);
    document.getElementById('receiptNumber').value = receiptCounter;
}