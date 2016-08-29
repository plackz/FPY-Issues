/*
 * Auto-generated content from the Brackets New Project extension.  Enjoy!
 */

' setting the window size and position. when changing set the screen.avail* offsets to match from resizeTo

/*

var myWindow = window.open("","","width=300, height=800");

myWindow.resizeTo(300,800);
windowLeft = (window.screen.availWidth - 300);
windowTop = (window.screen.availHeight - 800);
myWindow.moveTo(windowLeft, windowTop);

*/

/* Selection box  

function selectDropDown() {

    var issues = ["Issue 1", "Issue 2", "Issue 3"];
    var select = document.getElementById("selectIssues");


    for ( i = 0; i < issues.length; i++) {
        var options = document.createElement('option');
        options.innerHTML = issues[i];
        options.value = issues[i];
        select.appendChild(options);
    } 
}

*/

/* Add Other issues
TODO: convert from VBScript to Javascript
    Sub addOther
        Dim Input
        Input = InputBox("Enter Issue")
        
        Const ForAppending = 8

        Set objFSO = CreateObject("Scripting.FileSystemObject")

        Set objFile = objFSO.OpenTextFile("\\okcpfs01vh\Shared\unsecured\QUALITY\Projects\FPY-Issue-Capture\FPYIssuesLog.txt", ForAppending)
    
        Set WshNetwork = CreateObject("WScript.Network")
        
        objFile.Write WshNetwork.ComputerName
        
        objFile.Write "; " & Input & "; " & Now & vbCrLf
        
        objFile.Close    
        
        MsgBox "Submitted '" & Input & "'. Thank you!"        
        
    End Sub

    */