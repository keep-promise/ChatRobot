export interface ChatsInfo {
  path: string
  id: string
  name: string
  persona_id?: string | number
  data: Array<ChatGpt>
}

// 对话记录
export interface ChatGpt {
  id: string
  text: string
  dateTime: string
  status: 'pass' | 'loading' | 'error'
  role: 'assistant' | 'user' | string
  persona_id?: string | number
  requestOptions: RequestChatOptions,
  plugin_id?: string | number
  plugin_info?: PluginInfo
}

export interface RequestChatOptions {
  prompt: string
  options?: Omit<ChatGptConfig, 'api' | 'api_key'>
  parentMessageId?: string
}

export interface ChatGptConfig {
  // api
  // api: string
  // api-key
  // api_key?: string
  // 模型
  model: string
  // 输出随机性 0 - 2
  temperature?: number
  // 惩罚性质 -2 - 2
  presence_penalty?: number
  // 惩罚频率 -2 - 2
  frequency_penalty?: number
  // 携带历史消息数
  // limit_message?: number
  // 单次回复限制
  max_tokens?: number
}

export interface PluginInfo {
	id: number;
	user_id?: string | number;
	name: string;
	description: string;
	avatar: string;
	variables?: string;
	function: string;
	script: string;
	status: number;
	create_time: string;
	update_time: string;
	user?: UserInfo;
  installed: boolean
}

export interface UserInfo {
  id: string
  account: string
  nickname: string
  avatar: string
  role: string
  integral: number
  vip_expire_time: string
  svip_expire_time: string
  ip: string
  status: number
  invite_code: string
  superior_id?: string
  user_agent?: string
  today_invite_count?: number
  current_amount?: number
  subordinate_today_pay_amount?: number
  all_commission_amount?: number
  create_time: string
  update_time: string
  is_signin: number
}
