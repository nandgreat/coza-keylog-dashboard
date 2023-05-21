
export interface WorkersResponse {
    success: boolean;
    message: string;
    data: Worker[];
}

export interface Worker {
    id: number;
    first_name: string;
    last_name: string;
    worker_code: string;
    email: string;
    department_id: number;
    department_name: string;
    image_url: string;
    created_at: Date;
    updated_at: Date;
}