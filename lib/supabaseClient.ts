import { createClient } from '@supabase/supabase-js';

// Colocando direto aqui para forçar o carregamento
const supabaseUrl = "https://igyayvgnbmwudjyhfqqh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlneWF5dmduYm13dWRqeWhmcXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMzY3OTUsImV4cCI6MjA5NTkxMjc5NX0.gen3p94k26vdIsFhwqtaSwbkkx8SZaE23c-6Dg0LoTg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);