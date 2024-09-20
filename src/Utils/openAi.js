import {OPEN_AI} from "./Constant"
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: OPEN_AI, dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default openai;