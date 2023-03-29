<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'

const { theme } = useTheme()
const { language } = useLanguage()

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: '#2474FFC8',
    hoverColor: '#2474ff',
    primaryColorHover: '#2474ff',
    caretColor: '#247ff',
  },
  Button: {
    colorHoverPrimary: '#2474FF98',
    borderPrimary: '#2474FF78',
    borderHoverPrimary: '#2474FF98',
  },
  Select: {
    peers: {
      InternalSelectMenu: {
        optionTextColorActive: '#000',
      },
    },
  },
}
console.log(112)
</script>

<template>
  <NConfigProvider
    class="h-full"
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>
