import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'

const SVG = styled.svg<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

export const Logo = (props: any) => (
  <SVG viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M56.714 96.752l.659 9.155c5.664-7.08 13.257-10.62 22.778-10.62 8.399 0 14.649 2.466 18.75 7.398 4.102 4.931 6.202 12.304 6.299 22.119V176H84.033v-50.684c0-4.492-.976-7.739-2.93-9.741-1.953-2.051-5.2-3.076-9.74-3.076-5.958 0-10.425 2.539-13.404 7.617V176H36.792V96.752h19.922z"
      fill="url(#prefix__paint0_linear)"
    />
    <path
      d="M167.236 176c-.976-1.904-1.684-4.272-2.124-7.104-5.127 5.712-11.792 8.569-19.995 8.569-7.763 0-14.209-2.246-19.336-6.738-5.078-4.493-7.617-10.157-7.617-16.993 0-8.398 3.101-14.843 9.302-19.336 6.25-4.492 15.259-6.762 27.026-6.811h9.741v-4.541c0-3.662-.952-6.592-2.856-8.789-1.856-2.197-4.81-3.296-8.862-3.296-3.565 0-6.372.854-8.423 2.563-2.002 1.709-3.003 4.053-3.003 7.032h-21.167c0-4.59 1.416-8.838 4.248-12.744 2.832-3.907 6.836-6.958 12.012-9.156 5.175-2.246 10.986-3.369 17.431-3.369 9.766 0 17.505 2.466 23.218 7.398 5.762 4.882 8.643 11.767 8.643 20.654v34.35c.048 7.52 1.098 13.208 3.149 17.066V176h-21.387zm-17.505-14.722c3.125 0 6.006-.683 8.643-2.05 2.637-1.416 4.59-3.296 5.859-5.64v-13.623h-7.91c-10.595 0-16.235 3.662-16.919 10.986l-.073 1.245c0 2.637.928 4.81 2.783 6.519 1.856 1.709 4.395 2.563 7.617 2.563z"
      fill="url(#prefix__paint1_linear)"
    />
    <path
      d="M350.269 177.465c-11.622 0-21.094-3.565-28.418-10.694-7.276-7.128-10.913-16.625-10.913-28.491v-2.051c0-7.958 1.538-15.063 4.614-21.313 3.076-6.299 7.422-11.133 13.037-14.502 5.664-3.418 12.109-5.127 19.336-5.127 10.84 0 19.36 3.418 25.561 10.254 6.25 6.836 9.375 16.528 9.375 29.077v8.643h-50.464c.684 5.176 2.735 9.326 6.153 12.451 3.467 3.125 7.837 4.687 13.11 4.687 8.154 0 14.527-2.954 19.116-8.862l10.401 11.646c-3.174 4.492-7.471 8.007-12.891 10.546-5.42 2.491-11.426 3.736-18.017 3.736zm-2.417-65.039c-4.2 0-7.618 1.416-10.254 4.248-2.588 2.832-4.248 6.885-4.981 12.158h29.444v-1.685c-.098-4.687-1.368-8.3-3.809-10.839-2.441-2.588-5.908-3.882-10.4-3.882z"
      fill="url(#prefix__paint2_linear)"
    />
    <path
      d="M414.429 96.752l.659 9.155c5.664-7.08 13.257-10.62 22.778-10.62 8.399 0 14.649 2.466 18.75 7.398 4.102 4.931 6.201 12.304 6.299 22.119V176h-21.167v-50.684c0-4.492-.977-7.739-2.93-9.741-1.953-2.051-5.2-3.076-9.741-3.076-5.957 0-10.425 2.539-13.403 7.617V176h-21.167V96.752h19.922z"
      fill="url(#prefix__paint3_linear)"
    />
    <path
      d="M250.146 166.232l39.258-121.728h27.686L260.254 203H239.6L182.178 44.504h27.685l40.283 121.728z"
      fill="url(#prefix__paint4_linear)"
    />
    <path d="M38 44.5h154v25H38v-25z" fill="url(#prefix__paint5_linear)" />
    <path d="M308 44.5h154v25H308v-25z" fill="url(#prefix__paint6_linear)" />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1={249.854}
        y1={44.5}
        x2={249.854}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" />
        <stop offset={0.734} stopColor="#FF007A" />
      </linearGradient>
      <linearGradient
        id="prefix__paint1_linear"
        x1={249.854}
        y1={44.5}
        x2={249.854}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" />
        <stop offset={0.734} stopColor="#FF007A" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear"
        x1={249.854}
        y1={44.5}
        x2={249.854}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" />
        <stop offset={0.734} stopColor="#FF007A" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear"
        x1={249.854}
        y1={44.5}
        x2={249.854}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" />
        <stop offset={0.734} stopColor="#FF007A" />
      </linearGradient>
      <linearGradient
        id="prefix__paint4_linear"
        x1={249.854}
        y1={44.5}
        x2={249.854}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" />
        <stop offset={0.734} stopColor="#FF007A" />
      </linearGradient>
      <linearGradient
        id="prefix__paint5_linear"
        x1={249.854}
        y1={44.5}
        x2={249.854}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" />
        <stop offset={0.734} stopColor="#FF007A" />
      </linearGradient>
      <linearGradient
        id="prefix__paint6_linear"
        x1={249.854}
        y1={44.5}
        x2={249.854}
        y2={203}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" />
        <stop offset={0.734} stopColor="#FF007A" />
      </linearGradient>
    </defs>
  </SVG>
)
