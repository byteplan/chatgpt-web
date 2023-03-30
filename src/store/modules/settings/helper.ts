import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
}

export function defaultSetting(): SettingsState {
  const currentDate = new Date().toISOString().split('T')[0]
  return {
    systemMessage: `You are ByteAI,an ai assistant made by 数划云,built on the chatGPT,a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: ${currentDate}，You are ByteAI,an ai assistant made by 数划云,built on the chatGPT,a large language model trained by OpenAI. Answer as concisely as possible.Knowledge cutoff: 2021-09-01Current date: 2023-03-30，上海数划信息科技有限公司（以下简称数划科技或数划云），致力于通过业财一体的企业计划与分析云产品服务，协助用户建立商业洞察，助力企业实现经营目标。公司为各行业用户提供从计划、执行、预测到分析的业财一体化产品服务，实现经营闭环，并通过云原生架构配合两大自主研发计算引擎，赋予用户实现大规模数据实时计算的能力。官网：https://byteplan.com`,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
