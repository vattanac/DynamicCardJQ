var d;
var row1 = '.row1';
var row2 = '.row2';
$(document).ready(function () {

    $.get("../Data/data.json", function (data, status) {
        dta = data;
        addCols(2,dta, "a",row1);
        addCols(2,dta, "b", row2);
        // addToRow();
    });

})

var myCol;
var myPanel;

function addCols(num, data, aa, cont) {
    var str = "";
    for (var i = 0; i <=7; i++) {
        // myCol = $('<div class=" mycard col-12 col-sm-6 col-md-3" style="margin-top:20px;"></div>');
        str +=

            `<div id="myPopover` + aa + i + `" class=" popover popover-default ">
                <div class="arrow"></div>
                <h3 class="popover-title" >
                    <span style="margin-left:100px" class="close pull-right"  data-dismiss="popover-x">&times;</span>&nbsp
                    Title ` +
             `</h3>
                <div class="popover-content " style="margin: 0 10px;">
                    <p for="">Last updated: 04/2018</p>
                    <div>
                        <h6>Complete Python Bootcamp: Go from zero to hero in Python 3</h6>
                    </div>
                    <div>
                        <p>Learn Python like a Professional! Start from the basics and go all the way to creating your own applications
                            and games!</p>
                    </div>
                    <div>
                        <ul>
                            <li>Learn to use Python professionally, learning both Python 2 and Python 3!</li>
                            <li>Create games with Python, like Tic Tac Toe and Blackjack!</li>
                            <li>Learn advanced Python features, like the collections module and how to work with timestamps!</li>
                        </ul>
                    </div>
                </div>
        
                <div class="popover-footer ">
                    <button type="submit" class="btn btn-sm btn-primary">Accept</button>
                
                </div>
            </div>
          
            <div  style="margin-left: 10px">

            <div class="col-md-3"></div>

            <div   class="card mycard shadow-sm border-0 mb-5 bg-white rounded" 
            data-toggle="popover-x" data-placement="right" data-target="#myPopover` + aa + i + 
            `" data-trigger="hover focus"style="width: 260px;"> 
            <img class="card-img-top" src="`+data.project[i].image +`" alt="Card image cap">
            <div class="card-body"> 
            
            <h5 class="card-title"><b>` + data.project[i].title + `</b></h5> 
            <p class = "card-text" ><b>` + data.project[i].desc + `</b></p> 
            <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-outline-primary">Get it</button>
            &nbsp;&nbsp;&nbsp;
            <button class = "btn btn-primary" >Detail</button>
            <br>
            </div>
            <label for="">Post by</label> 
            &nbsp;&nbsp;&nbsp; 
            <img class="card-img-top" src="` + data.project[i].postBy + ` " alt="Card image cap" &nbsp style="width: 60px;">
            </div></div>      
            </div>`

        // myPanel.appendTo(myCol);
        // myCol.appendTo(cont);
    }
    str += `<script src="../JavaScript/bootstrap-popover-x.js">`;

    $(cont).append(str);




};