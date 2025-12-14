import fs from "fs";


class FileValidator {

    constructor() {
        this.allowedSignatures = ["ffD8ff", "89504e470d0a1a0a"]; //JPEG, PNG Signatures
        this.webpType = { tag: "57454250", riff: "52494646" }
    }

    isFileSignatureValid(file) {

        if (!file) {
            return;
        }

        const buffer = file.buffer

        if (file.mimetype !== "image/webp") {
            const file12BitBuffer = buffer.subarray(0, 8);
            const fileHexSignature = file12BitBuffer.toString("hex");

            for (let i = 0; i < this.allowedSignatures.length; i++) {
                if (fileHexSignature.startsWith(this.allowedSignatures[i])) {
                    return true;
                }
            }
            return false;

        } else {
            const webpRiff = buffer.subarray(0, 4).toString("hex");
            const webpTag = buffer.subarray(8, 12).toString("hex");

            if (webpRiff === this.webpType.riff && webpTag === this.webpType.tag) {
                return true;
            }
            return false;
        }
    }

}

export default new FileValidator();