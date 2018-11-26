# Grid-en-JS
Creacion de Repositorio para GRID en JS


La manera de llamar a la función es AddNewGrid(container, element, flag, w, h, x, y)

-	Container es el div sobre el que se quiere añadir el elemento en este caso -> grid
-	Element es el contenido que se quiere añadir al nuevo elemento -> Por defecto añado el texto NEW
-	Flag es un variable que determina si vamos a pasar o no el tamaño deseado y la posición

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
-	Las variables w,h,x,y son las que determinan el tamaño que deseamos que tenga el nuevo elemento y la posición donde queremos que aparezca

Ejemplo para crear un nuevo elemento sin determinar ni posición ni tamaño:
-	AddNewGrid(container, 'Prueba', )

Ejemplo determinando posición y tamaño especifico:
-	AddNewGrid(container, 'Prueba', 0, 2, 3, 4, 1)
