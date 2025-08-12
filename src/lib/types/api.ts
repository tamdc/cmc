export interface CMCResponse<T> {
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
  };
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  status: {
    total_count: number;
    page: number;
    per_page: number;
  };
}