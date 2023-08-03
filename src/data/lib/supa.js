
import { createClient } from '@supabase/supabase-js';
import { REACT_APP_DB_PROJECT_URL, REACT_APP_DB_API_KEY } from './constants';

// Create a single supabase client for interacting with your database
export const supabase = createClient(REACT_APP_DB_PROJECT_URL, REACT_APP_DB_API_KEY)