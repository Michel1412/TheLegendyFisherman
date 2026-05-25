// priority: 100
// Tiers TLF (peixes e varas) — NBT tlf_tier. tooltip = peixe | tooltipRod = vara de pesca.

;(function () {
  var tlf = global.TLF || {}
  tlf.constants = tlf.constants || {}

  tlf.constants.tiers = {
    LOW: {
      id: 'low',
      display: 'Baixa',
      multiplier: 0.6,
      color: '#7A7A7A',
      tooltip: 'Um peixe abaixo da média.',
      tooltipRod: 'Vara desgastada; a linha sai sem firmeza.'
    },
    MEDIUM: {
      id: 'medium',
      display: 'Média',
      multiplier: 1.0,
      color: '#FFFFFF',
      tooltip: 'Um peixe comum.',
      tooltipRod: 'Vara confiável para o dia a dia na beira d\'água.'
    },
    GOOD: {
      id: 'good',
      display: 'Boa',
      multiplier: 1.2,
      color: '#55FF55',
      tooltip: 'Um peixe de boa qualidade.',
      tooltipRod: 'Boa flexão e equilíbrio — arremessos estáveis.'
    },
    GREAT: {
      id: 'great',
      display: 'Ótima',
      multiplier: 1.5,
      color: '#00AAAA',
      tooltip: 'Um peixe muito bem pescado.',
      tooltipRod: 'Arremesso longo e recolhida suave; feita para quem domina o mar.'
    },
    EXCELLENT: {
      id: 'excellent',
      display: 'Excelente',
      multiplier: 2.0,
      color: '#5555FF',
      tooltip: 'Um peixe excepcional.',
      tooltipRod: 'Construção refinada; cada lançamento parece certeiro.'
    },
    PERFECT: {
      id: 'perfect',
      display: 'Perfeito',
      multiplier: 3.0,
      color: '#AA00AA',
      tooltip: 'Uma captura quase impossível.',
      tooltipRod: 'Obra-prima de equilíbrio; a linha obedece ao toque do pescador.'
    },
    LEGENDARY: {
      id: 'legendary',
      display: 'Lendário',
      multiplier: 5.0,
      color: '#FFAA00',
      tooltip: 'Uma criatura das lendas marítimas.',
      tooltipRod: 'Forjada para lendas; dizem que o mar escolhe quem a empunha.'
    }
  }

  global.TLF = tlf
  global.TLF_FISH_TIERS = tlf.constants.tiers
  global.FISH_TIERS = global.TLF_FISH_TIERS
})()
