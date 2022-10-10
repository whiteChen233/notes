import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "intro"
  ],
  "/zh/front-end": [
    "",
    {
      text: "ES6",
      prefix: "ES6/",
      collapsable: true,
      children: [
        "Promise"
      ]
    },
    {
      text: "Vue 2",
      prefix: "Vue2/",
      collapsable: true,
      children: [
        "Runtime",
        "Component",
        "Slot",
        "Modules",
        "Webpack",
        "Vue_CLI",
        "Vue_Router",
        "Vuex"
      ]
    }
  ],
  "/zh/QCCSTP/": [
    "",
    {
      text: "软件设计师",
      prefix: "software-design-engineer/",
      collapsable: true,
      children: [
        "start",
        "computer-composition-and-structure",
        "program-language",
        "operating-system",
        "fundamentals-of-software-engineering",
        "system-development-and-operation",
        "basic-knowledge-of-network-and-multimedia",
        "database-technology",
        "algorithms-and-data-structures",
        "object-oriented-technology",
        "standardization-and-intellectual-property"
      ]
    },
    {
      text: "系统架构设计师",
      prefix: "system-architect/",
      collapsable: true,
      children: [
        "start",
        "enterprise-informatization-strategy-and-implementation",
        "software-engineering",
        "software-architecture-design",
        "design-thesis",
        "system-security-analysis-and-design",
        "system-reliability-analysis-and-design",
        "project-management",
        "computer-composition-and-architecture",
        "system-configuration-and-performance-evaluation",
        "case-analysis",
        "operating-system",
        "computer-network",
        "database-system"
      ]
    }
  ],
  "/zh/others/": [
    "",
    "UML/UML"
  ]
});