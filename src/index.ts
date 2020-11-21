import { fabric } from "fabric";
import { jsPDF, jsPDFOptions } from "jspdf";

const canvas = new fabric.Canvas(null, {
    height: 4000,
    width: 6000
} as fabric.ICanvasOptions);

var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45
});

canvas.add(rect);

canvas.renderAll();

var imgData = canvas.toDataURL({
    format: "jpeg",
    quality: 1
} as fabric.IDataURLOptions);
var pdf = new jsPDF({
    unit: "px"
 } as jsPDFOptions);
pdf.addImage(imgData, "jpeg", 0, 0, 6000, 4000);
pdf.save("download.pdf");