var pos_x = 0;
var pos_y = 0;
var initial = true;
var cont = 0;

var pos_size = [{id: 0, w:0, h:0, x:0, y:0}];

$(function() {

  $('.add-element').click(function(e) {
	  container = "grid";
	  element = "NEW";
	  AddNewGrid(container, element, "-1");
  });

  $('.remove-element').click(function(e) {
	  RemoveGrid();
  });

  $('.add-table').click(function(e) {
	  container = "grid";
    $('table.highchart').highchartTable();
	  AddNewTableGrid(container, "-1");
  });

  $('.add-graf').click(function(e) {
    container = "grid";
    AddNewTableGrid(container, "-1");
  });

});

function RemoveGrid(){
	pos_x = 0;
	pos_y = 0;
	initial = true;
	cont = 0;
	$(".ui-draggable").remove();
}

/*** FUNCION PARA AÑADIR UN NUEVO GRID ***/
function AddNewGrid(container, element, flag, w, h, x, y){
	var i;
	var item;
	var items = [{w:1, h:1, x:0, y:0}];
	
	console.log(container +'-'+ element +'-'+ flag +'-'+ w +'-'+ h +'-'+ x +'-'+ y)

	w = w || 1;
	h = h || 1;
	x = x || 0;
	y = y || 0;

	switch(flag){
		case 0 :
			//Flag 0 -> Size and Position
			console.log("Flag 0 -> Size & Position");
			items[0].w = w;
			items[0].h = h;
			items[0].x = x;
			items[0].y = y;
			break;
		case 1:
			//Flag 1 -> Size
			console.log("Flag 1 -> Size");
			items[0].w = w;
			items[0].h = h;
			break;
		case 2:
			//Flag 2 -> Position
			console.log("Flag 2 -> Position");
			items[0].x = x;
			items[0].y = y;
			break;
		default :
			console.log("No Flag");
			break;
	}

	element = ($(".inner").toArray().length >= 1) ? (element + "_" + ($(".inner").toArray().length-1)) : element;

	for (i = 0; i < items.length; i++) {
		item = items[i];

		switch(flag){
			case 0 :
			case 2 :
				break;
			default :
				if(!initial)
				{
					if(pos_x < 10)
					{
						pos_x++;
						item.x = pos_x;
						item.y = pos_y;
					}else{
						pos_y++;
						pos_x = 0;
						item.x = pos_x;
						item.y = pos_y;
					}
				}else{
					initial = false;
				}
				break;
		}

		$item = $(
				'<li>' +
				  '<div class="inner">' +
				    '<div class="controls">' +
				      	'<a href="#zoom1" class="resize" data-w="1" data-h="1">1x1</a>' +
				      	'<a href="#zoom2" class="resize" data-w="2" data-h="1">2x1</a>' +
				      	'<a href="#zoom3" class="resize" data-w="3" data-h="1">3x1</a>' +
				      	'<a href="#zoom1" class="resize" data-w="1" data-h="2">1x2</a>' +
				      	'<a href="#zoom2" class="resize" data-w="2" data-h="2">2x2</a>' +
				     '</div>' +
				     element +
				  '</div>' +
				'</li>'
		);

		cont++;

		$item.attr({
		  'data-w': item.w,
		  'data-h': item.h,
		  'data-x': item.x,
		  'data-y': item.y
		});

		$('#'+container).append($item);

		$('#'+container).gridList({
		    onChange: function(changedItems) {
		      DemoGrid.flashItems(changedItems);
		    }
		});

		$('#'+container+' li .resize').click(function(e) {
			e.preventDefault();
			var itemElement = $(e.currentTarget).closest('li'),
	        itemWidth = $(e.currentTarget).data('w'),
	        itemHeight = $(e.currentTarget).data('h');

			$('#'+container).gridList('resizeItem', itemElement, {
				w: itemWidth,
				h: itemHeight
			});
  	});
	}
}



