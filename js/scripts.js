$(document).ready(function(){
  console.log('scripts loaded');

/*
1) Build an HTML table using an AJAX call on the provided XML file (NEH_Grants2010s.xml).
   The XML data shows all of the grants awarded by the National Endowment for the Humanities since 2008.
2) The table should have four columns:
    The Project Title, Year Awarded, Original Amount, and grant description (ToSupport)
3) You will notice that the table is a bit messy; some of the grants have no descriptions, leaving large
   blank spaces with just 'None.' Clean this up with conditional logic in your code.
   If the grant has no description, do not include it in the table.
*/

  var grantsAwarded; // the data
  var html = ''; // the html that I will build
  var url = '/js/NEH_Grants2010s.xml'; // the XML file
  var title = ''; // the Project Title: col 1
  var year = ''; // Year Awarded: col 2
  var amount = ''; // Original Amount: col 3
  var description = ''; // Grant Description: col 4
  
  $.ajax({
    type: 'GET',
    url: url,
    data: grantsAwarded,
    dataType: 'xml',
    async: true,
    success: function(grantsAwarded){
      console.log(grantsAwarded);
      console.log('testing');
      
      // the table headers
      html += '<tr>';
      html += '<th>Project Title</th>';
      html += '<th>Year Awarded</th>';
      html += '<th>Original Amount</th>';
      html += '<th>Project Description</th>';
      html += '</tr>';
      
      // function to parse data
      $(grantsAwarded).find('Grant').each(function(){
        title = $(this).find('ProjectTitle').text();
        year = $(this).find('YearAwarded').text();
        amount = $(this).find('OriginalAmount').text();
        description = $(this).find('ToSupport').text();
        html += '<tr>';
        html += '<td>' + title + '</td>';
        html += '<td>' + year + '</td>';
        html += '<td>' + amount + '</td>';
        html += '<td>' + description + '</td>';
        html += '</tr>';
        
      });
      
      $('#results').append(html); // tell jQuery to insert the results
    },
    error:function(msg){
      console.log('wtf');
    },
    complete:function(msg){
      console.log('ajax complete');
    }
    
    
  });
  
});
