export interface Credit {
  id: string;
  created_at: string;
  user_id: string;
  trans_type: string;
  credits: number;
  order_id?: string;
  expired_at?: string;
}
