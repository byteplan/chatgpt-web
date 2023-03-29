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
    primaryColor: '#1890ff',
    hoverColor: '#1890ff',
    primaryColorHover: '#1890ff',
    caretColor: '#1890ff',
  },
  Button: {
    colorHoverPrimary: '#1890FFC8',
    borderPrimary: '#1890FF78',
    borderHoverPrimary: '#1890FF98',
  },
  Select: {
    peers: {
      InternalSelectMenu: {
        optionTextColorActive: '#000',
      },
    },
  },
}
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
