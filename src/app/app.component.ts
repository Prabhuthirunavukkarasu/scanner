import { Component } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    scannedResult: string;
    constructor(private barcodeScanner: BarcodeScanner) { }

    public onScan() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then((result) => {
            console.log("Scanned" + result.text);
            this.scannedResult = result.text;
            alert(result.text);
        }, (errorMessage) => {
            console.log("Error when scanning " + errorMessage);
        }
        );
    }
}
