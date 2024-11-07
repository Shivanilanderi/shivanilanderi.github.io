export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"]; // Specify columns in order
  
    // Start table with data-user attribute
    let html = '<table data-user="shivanilanderi@gmail.com">';
  
    // Generate table header
    html += "<thead><tr>";
    columns.forEach(col => {
      html += `<th>${col}</th>`;
    });
    html += "</tr></thead>";
  
    // Generate table body
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      columns.forEach(col => {
        html += `<td>${row[col] || ""}</td>`; // Insert cell or empty cell if missing
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
  
    return html;
  }
  