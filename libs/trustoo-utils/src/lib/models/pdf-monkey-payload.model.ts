export interface PdfMonkeyPayloadModel {
    document: PdfMonkeyPayloadDocumentModel
}

export interface PdfMonkeyDocumentCardPayloadModel {
    document_card: PdfMonkeyPayloadDocumentModel
}

export interface ParsedPdfMonkeyPayloadModel {
    document: ParsedPdfMonkeyPayloadDocumentModel
}

interface PdfMonkeyPayloadDocumentModel {
    id: string,
    document_template_id: string,
    payload: string,
    meta: string,
    status: 'success' | string,
    created_at: string,
    updated_at: string,
    app_id: string,
    download_url: string,
    checksum: string,
    failure_cause: string | null,
    filename: string,
    generation_logs: {
        message: string,
        timestamp: string,
        type: string
    }[],
    preview_url: string,
    public_share_link: null | string
}

interface ParsedPdfMonkeyPayloadDocumentModel extends Omit<PdfMonkeyPayloadDocumentModel, 'meta'> {
    meta: {
        inspectionId: string,
        version: string
    }
}
