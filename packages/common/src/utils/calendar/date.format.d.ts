export declare const DB_DATETIME_EXPR = "yyyy-MM-dd HH:mm:ss.SSSS";
export declare const formatDate: (date?: any) => string;
export declare const formatDateExpr: (date?: any, expr?: string) => string;
export declare const formatDateTime: (date?: any, expr?: string) => string;
export declare const convertDBTimeString: (input: string | number | Date) => string;
