export function getElementType(element) {
    // Array com os números atômicos dos elementos de cada grupo
    const metaisAlcalinos = [3, 11, 19, 37, 55, 87];
    const metaisAlcalinoTerrosos = [4, 12, 20, 38, 56, 88];
    const metaloides = [5, 14, 32, 33, 51, 52, 84]
    const metaisDeTransicao = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
      72, 73, 74, 75, 76, 77, 78, 79, 80, 
      89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
      104, 105, 106, 107, 108, 109, 110, 111, 112];
    const lantanideos = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
      67, 68, 69, 70, 71];
    const actinideos = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
      99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
      109, 110, 111, 112];
    const naoMetais = [1, 6, 7, 8, 15, 16, 34];
    const outrosMetais = [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116]
    const halogenios = [9, 17, 35, 53, 85, 117];
    const gasesNobres = [2, 10, 18, 36, 54, 86, 118];
  
    // Obtém o número atômico do elemento
    const atomicNumber = element.atomicNumber;
  
    // Verifica a qual grupo o número atômico pertence
    if (metaisAlcalinos.includes(atomicNumber)) {
      return 'metais-alcalinos';
    } else if (metaisAlcalinoTerrosos.includes(atomicNumber)) {
      return 'metais-alcalino-terrosos';
    } else if (metaloides.includes(atomicNumber)) {
      return 'metaloides';
    } else if (metaisDeTransicao.includes(atomicNumber)) {
      return 'metais-de-transicao';
    } else if (lantanideos.includes(atomicNumber)) {
      return 'lantanideos';
    } else if (actinideos.includes(atomicNumber)) {
      return 'actinideos';
    } else if (naoMetais.includes(atomicNumber)) {
      return 'nao-metais';
    } else if (outrosMetais.includes(atomicNumber)) {
      return 'outros-metais';
    } else if (halogenios.includes(atomicNumber)) {
      return 'halogenios';
    } else if (gasesNobres.includes(atomicNumber)) {
      return 'gases-nobres';
    } else {
      return ''; // Elemento não se encaixa em nenhuma categoria específica
    }
  }
  
  export  function generateElectronDistribution(atomicNumber) {
    let electronDistribution = [];
    let electronsRemaining = atomicNumber;
  
    // Distribuição em camadas
    for (let shell = 1; electronsRemaining > 0; shell++) {
      let maxElectronsInShell = 2 * Math.pow(shell, 2);
      let electronsInShell = Math.min(electronsRemaining, maxElectronsInShell);
  
      electronDistribution.push(`${shell}n${electronsInShell}`);
  
      electronsRemaining -= electronsInShell;
    }
  
    return electronDistribution.join(' ');
  }

  export function calculateLinusPaulingDiagram(atomicNumber) {
    const shells = { K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0 };
    let electrons = 0;
  
    // Preencher as camadas K, L, M, N, O, P e Q com elétrons até atingir o número atômico
    while (electrons < atomicNumber) {
      if (electrons < 2) {
        shells.K += 1;
        electrons += 1;
      } else if (electrons < 10) {
        shells.L += 1;
        electrons += 1;
      } else if (electrons < 28) {
        shells.M += 1;
        electrons += 1;
      } else if (electrons < 60) {
        shells.N += 1;
        electrons += 1;
      } else if (electrons < 92) {
        shells.O += 1;
        electrons += 1;
      } else if (electrons < 110) {
        shells.P += 1;
        electrons += 1;
      } else if (electrons < 118) {
        shells.Q += 1;
        electrons += 1;
      }
    }
  
    return shells;
  }