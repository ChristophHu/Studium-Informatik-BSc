import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfJsViewerModule } from "ng2-pdfjs-viewer";

import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from 'pdfmake/interfaces';

// pdfMake.fonts = {
//   Roboto: {
//     normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
//     bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
//     italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
//     bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
//   }
// }

@Component({
  selector: 'app-beleg',
  standalone: true,
  imports: [
    PdfJsViewerModule
  ],
  templateUrl: './beleg.component.html',
  styleUrl: './beleg.component.sass'
})
export class BelegComponent implements OnInit {
  private pdfMake: any
  // private fonts!: { [file: string]: string };

  @ViewChild('pdfViewer') pdfViewer?: any

  constructor() {
    this.pdfMake = pdfMake
    this.pdfMake.vfs = pdfFonts.pdfMake.vfs
    // (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;

    this.pdfMake.fonts = {
      'Roboto': {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
      }
    }
  }

  // async loadPDFMaker() {
  //   if (!this.pdfMake) {
  //       this.pdfMake = await import('pdfmake/build/pdfmake');
  //       this.fonts = (await import('pdfmake/build/vfs_fonts')).pdfMake.vfs;
  //   }
  // }

  async open(def: TDocumentDefinitions) {
    if(!this.pdfMake) {
      try {
          // await this.loadPDFMaker()
      } catch (error) {
          console.error("Failed to load pdf maker lib");
      }
    }
    // pdfMake.createPdf(def).download("test.pdf")
    // const pdfDocGenerator = this.pdfMake.createPdf(def, null, null, this.fonts)
    // console.log(pdfDocGenerator)
    const pdfDocGenerator = this.pdfMake.createPdf(def);
    pdfDocGenerator.getBlob((blob:Blob) => {
      this.pdfViewer.pdfSrc = blob
      this.pdfViewer.refresh()
    })
  }

  ngOnInit(): void {
    // this.generateFile()

    // const pdfDocGenerator = this.pdfMake.createPdf(this.genPdf(), null, null, this.fonts)
    // pdfDocGenerator.getBlob((blob:Blob) => {
    //   this.pdfViewer.pdfSrc = blob
    //   this.pdfViewer.refresh()
    // })
    const def = { content: 'Efficient way to use pdfmake' };
    this.open(def)
  }

  genPdf() {
    return {
      pageSize: 'A4',
      pageOrientation: 'p',
      pageMargins: [70, 80, 50, 40],
      // watermark: (prepare.watermark),

      // header
      // header(currentPage: any, pageCount: any) {
      //   return {
      //     margin: [25 * 2.54, 10 * 2.54, 50, 0],
      //     columns: [
      //       {
      //         table: {

      //           widths: [360, '*'],
      //           style: 'headertable',
      //           body: [
      //             [{ text: 'Polizei Berlin', style: 'poltitle' }, { rowSpan: 2, alignment: 'right', image: 'data:image/png;base64,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', fit: [35 * 2.54, 35 * 2.54] }],
      //             [
      //               // {
      //               //   text: prepare.schiff.dienststelle + ' - ' + prepare.schiff.name,
      //               //   style: 'vgnr'
      //               // },
      //               {}
      //             ],
      //             [
      //               {
      //                 text: '',
      //                 border: [false, false, false, true]
      //               },
      //               {
      //                 text: '',
      //                 border: [false, false, false, true]
      //               }
      //             ]
      //           ]
      //         },
      //         layout: {
      //           defaultBorder: false,
      //           paddingLeft(i: any, node: any) { return 0; },
      //           paddingRight(i: any, node: any) { return 0; },
      //           paddingTop(i: any, node: any) { return 0; },
      //           paddingBottom(i: any, node: any) { return 0; },
      //         }
      //       }
      //     ]
      //   };
      // },

      // footer
      // footer(currentPage: { toString: () => string; }, pageCount: string) {
      //   return {
      //     margin: [25 * 2.54, 0, 50, 0],
      //     columns: [
      //       {
      //         table: {

      //           widths: [360, '*'],
      //           style: 'headertable',
      //           body: [
      //             [
      //               {
      //                 text: '',
      //                 style: 'footer'
      //               },
      //               {
      //                 text: 'Seite: ' + currentPage.toString() + ' / ' + pageCount,
      //                 style: 'footer',
      //                 alignment: 'right'
      //               }
      //             ],
      //             [
      //               {
      //                 text: '',
      //                 style: 'vgnr'
      //               },
      //               {}
      //             ]
      //           ]
      //         },
      //         layout: {
      //           defaultBorder: false,
      //           paddingLeft(i: any, node: any) { return 0; },
      //           paddingRight(i: any, node: any) { return 0; },
      //           paddingTop(i: any, node: any) { return 0; },
      //           paddingBottom(i: any, node: any) { return 0; },
      //         }
      //       }
      //     ]
      //   }
      // },

      // background
      // background(currentPage: number, pageSize: number) {
      //   return [
      //     {
      //       absolutePosition: { x: 0, y: 0 },
      //       canvas:
      //         [
      //           { //faltmarke oben
      //             type: 'line',
      //             x1: 8 * 2.54, y1: (297 * 2.54 / 3),
      //             x2: 13 * 2.54, y2: (297 * 2.54 / 3),
      //             lineWidth: 0.6
      //           },
      //           { //faltmarke unten
      //             type: 'line',
      //             x1: 8 * 2.54, y1: (297 * 2.54 / 3 * 2),
      //             x2: 13 * 2.54, y2: (297 * 2.54 / 3 * 2),
      //             lineWidth: 0.6
      //           },
      //           { //lochmaske
      //             type: 'line',
      //             x1: 8 * 2.54, y1: (297 * 2.54 / 2),
      //             x2: 11 * 2.54, y2: (297 * 2.54 / 2),
      //             lineWidth: 0.6
      //           }
      //         ],
      //     }
      //   ];
      // },

      content: [
        { text: 'Streifendokumentation', style: 'header' },

        // {
        //   style: ['default', 'margin'],
        //   color: '#444',
        //   table: {
        //     widths: [100, '*', 100, '*'],
        //     // headerRows: 1,
        //     body: [
        //       [{ text: 'Bootsname:', style: 'tableHeader' }, prepare.schiff.name, {}, {}],
        //       [{ text: 'Zweck der Fahrt:', style: 'tableHeader' }, prepare.streife.zweck, {}, {}],
        //       [{ text: 'Streifenbeginn:', style: 'tableHeader' }, prepare.streife.start, {}, {}],
        //       [{ text: 'Streifenende:', style: 'tableHeader' }, prepare.streife.ende, {}, {}],
        //       [{ text: 'Streifenstatus:', style: 'tableHeader' }, prepare.streife.status, {}, {}]
        //     ]
        //   },
        //   layout: 'noBorders'
        // },

        // {
        //   canvas: [{ type: 'line', lineColor: 'gray', x1: 0, y1: 0, x2: 470, y2: 0, lineWidth: 1 }]
        // },
        // {
        //   unbreakable: true,
        //   stack: [
        //     { text: 'I. Übernahmevermerk und Besatzung', style: 'subheader' },
        //     {
        //       style: 'default',
        //       color: '#444',
        //       table: {
        //         widths: [17, '*', '*', '*', '*'],
        //         headerRows: 2,
        //         body: [
        //           [
        //             { rowSpan: 2, text: '', fillColor: '#eeeeee' },
        //             { text: 'Uhrzeit', style: 'tableHeader', colSpan: 2, alignment: 'center', fillColor: '#eeeeee' },
        //             {},
        //             { rowSpan: 2, text: 'Funktion', alignment: 'center', style: 'tableHeader', fillColor: '#eeeeee', margin: 10 },
        //             { rowSpan: 2, text: 'Name', alignment: 'center', style: 'tableHeader', fillColor: '#eeeeee', margin: 10 }
        //           ],
        //           [
        //             '',
        //             { text: 'Beginn', alignment: 'center', fillColor: '#eeeeee', },
        //             { text: 'Ende', alignment: 'center', fillColor: '#eeeeee' },
        //             '',
        //             ''
        //           ],
        //           ...prepare.besatzung
        //         ]
        //       },
        //     },
        //   ]
        // },
        // {
        //   unbreakable: true,
        //   stack: [
        //     { text: 'II. Prüfvermerke/ Mängel am Schiff und an der Ausrüstung', style: 'subheader' },
        //     {
        //       style: 'default',
        //       color: '#444',
        //       table: {
        //         widths: [17, '*', 80, 80, 190],
        //         headerRows: 1,
        //         body: [
        //           [
        //             { text: '', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Uhrzeit', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Kategorie', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Bestandteil', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Beschreibung', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //           ],
        //           ...prepare.reparaturen
        //         ]
        //       },
        //     },
        //   ]
        // },
        // {
        //   unbreakable: true,
        //   stack: [
        //     { text: 'III. Betriebsstunden', style: 'subheader' },
        //     {
        //       style: 'default',
        //       color: '#444',
        //       table: {
        //         widths: this.width,
        //         headerRows: 1,
        //         body: [

        //           ...prepare.zaehlerstaende
        //         ]
        //       },
        //     },
        //   ]
        // },
        // {
        //   unbreakable: true,
        //   stack: [
        //     { text: 'IV. Betriebsstoffe', style: 'subheader' },
        //     {
        //       style: 'default',
        //       color: '#444',
        //       table: {
        //         widths: [50, 60, 45, 60, '*', 60, 42],
        //         headerRows: 2,
        //         body: [
        //           [
        //             {rowSpan: 2, text: '', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee'},
        //             { text: 'Peilung', style: 'tableHeader', colSpan: 2, alignment: 'center', fillColor: '#eeeeee' },
        //             {},
        //             { text: 'Betankung', style: 'tableHeader', colSpan: 4, alignment: 'center', fillColor: '#eeeeee' },
        //             {},
        //             {},
        //             {},
        //           ],
        //           [
        //             '', 
        //             { text: 'Uhrzeit', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' }, 
        //             { text: 'Bestand', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Uhrzeit', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Ort', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Einnahmen', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' },
        //             { text: 'Gesamt', style: 'tableHeader', alignment: 'center', fillColor: '#eeeeee' }
        //           ],
        //           ...prepare.betriebsstoffe
        //         ]
        //       },
        //     },
        //   ]
        // },
        // {
        //   unbreakable: true,
        //   stack: [
        //     { text: 'V. Fahrtverlauf', style: 'subheader' },
        //     {
        //       style: 'default',
        //       color: '#444',
        //       table: {
        //         widths: [17, 80, 120, '*'],
        //         headerRows: 1,
        //         body: [
        //           [
        //             { text: '', fillColor: '#eeeeee' },
        //             { text: 'Uhrzeit', alignment: 'center', style: 'tableHeader', fillColor: '#eeeeee' },
        //             { text: 'Halte-/Passierpunkte', alignment: 'center', style: 'tableHeader', fillColor: '#eeeeee' },
        //             { text: 'Beschreibung', alignment: 'center', style: 'tableHeader', fillColor: '#eeeeee' }
        //           ],
        //           ...prepare.einsatz

        //         ]
        //       },
        //     },
        //   ]
        // },
        // {
        //   unbreakable: true,
        //   stack: [
        //     {
        //       style: ['default'],
        //       color: '#444',
        //       table: {
        //         widths: [100, '*'],
        //         body: [
        //           ...prepare.bootsführer
        //         ],
        //       },
        //       //layout: 'noBorders'
        //     }
        //   ]
        // },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 15, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 12,
          color: 'black'
        },
        default: {
          bold: false,
          fontSize: 12,
          color: 'black'
        },
        margin: {
          margin: [0, 5, 0, 15]
        }
      },
      defaultStyle: {
        // alignment: 'justify'
        font: 'Roboto'
        // font: 'Helvetica'
      }
    }
  }
}
