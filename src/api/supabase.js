import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://knyxjptctrqylhxjzggv.supabase.co';
const supabasePublishableKey = 'sb_publishable_5ZYc4NycMgdD7abXqLK8Bw_ZKP5_9pn';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabasePublishableKey);