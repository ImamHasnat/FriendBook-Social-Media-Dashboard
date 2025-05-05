document.addEventListener("DOMContentLoaded", function () {
    const exportForm = document.getElementById("export-form");
  
    exportForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const startDate = document.getElementById("start-date").value;
      const endDate = document.getElementById("end-date").value;
      const format = document.getElementById("format").value;
      const scheduled = document.getElementById("schedule").checked;
  
      // Validate required fields
      if (!startDate || !endDate || !format) {
        alert("Please complete all required fields before proceeding.");
        return;
      }
  
      // Validate date range
      if (new Date(startDate) > new Date(endDate)) {
        alert("Start date cannot be after the end date.");
        return;
      }
  
      // Format string
      const formatLabel = format.toUpperCase();
      const message = `Format: ${formatLabel}\nDate Range: ${startDate} to ${endDate}`;
  
      // Scheduled export
      if (scheduled) {
        alert(`✅ Export scheduled successfully!\n\n${message}`);
        console.log("Scheduled Export Info:", {
          format: format,
          startDate: startDate,
          endDate: endDate
        });
        // TODO: Send to backend scheduler (via AJAX/API)
      } else {
        alert(`📥 Downloading ${formatLabel} report...\n\n${message}`);
        console.log("Downloading report:", {
          format: format,
          startDate: startDate,
          endDate: endDate
        });
  
        // Simulate download (replace with real backend call)
        simulateDownload(format, startDate, endDate);
      }
    });
  
    function simulateDownload(format, startDate, endDate) {
      const filename = `friendbook_report_${startDate}_to_${endDate}.${format}`;
      const fileContent = `This is a simulated ${format.toUpperCase()} file.\nDate Range: ${startDate} to ${endDate}`;
  
      const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
  