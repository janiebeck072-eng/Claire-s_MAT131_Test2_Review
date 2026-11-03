window.MA131={
  "topics": [
    {
      "id": "critical",
      "name": "Critical Numbers",
      "domain": "Shape of Graph",
      "tip": "Differentiate, solve f′(x)=0, and check where f′ is undefined but f exists.",
      "example": "For f(x)=3x⁴+12x³, f′(x)=12x²(x+3), so critical numbers are −3 and 0."
    },
    {
      "id": "monotonic",
      "name": "Increasing & Decreasing",
      "domain": "Shape of Graph",
      "tip": "Make a sign chart for f′ on intervals separated by critical numbers and domain breaks.",
      "example": "For f′(x)=3(x−2)(x+1), signs are +, −, + across −1 and 2."
    },
    {
      "id": "extrema",
      "name": "Relative Extrema",
      "domain": "Shape of Graph",
      "tip": "An f′ change +→− gives a local maximum; −→+ gives a local minimum.",
      "example": "For f′(x)=(x−1)(x+1), x=−1 is a maximum and x=1 is a minimum."
    },
    {
      "id": "concavity",
      "name": "Concavity",
      "domain": "Shape of Graph",
      "tip": "Use f″: positive means concave up; negative means concave down.",
      "example": "If f″(x)=6x, the graph is concave down for x<0 and up for x>0."
    },
    {
      "id": "inflection",
      "name": "Inflection Points",
      "domain": "Shape of Graph",
      "tip": "Check for a change in concavity and ensure the point is in the function domain.",
      "example": "For f(x)=x³, f″(x)=6x changes sign at 0, giving inflection point (0,0)."
    },
    {
      "id": "derivgraph",
      "name": "Reading Graphs of f′",
      "domain": "Shape of Graph",
      "tip": "f increases where f′>0. f is concave up where f′ increases. Extrema occur where f′ changes sign.",
      "example": "If f′ is an upward parabola crossing at −2 and 2, f increases outside the roots and decreases between them."
    },
    {
      "id": "second",
      "name": "Second Derivative Test",
      "domain": "Optimization",
      "tip": "At a critical number c, f″(c)>0 indicates a relative minimum and f″(c)<0 a relative maximum. Zero is inconclusive.",
      "example": "For f(x)=x², f′(0)=0 and f″(0)=2>0, so (0,0) is a relative minimum."
    },
    {
      "id": "absolute",
      "name": "Absolute Extrema & Domains",
      "domain": "Optimization",
      "tip": "Consider the entire domain, boundaries, and end behavior; local tests alone do not establish global extrema.",
      "example": "For 100/x+4x on (0,∞), the unique minimum is at x=5; the function has no maximum."
    },
    {
      "id": "model",
      "name": "Objectives & Constraints",
      "domain": "Optimization",
      "tip": "Write the quantity to optimize and use the constraint to eliminate a variable before differentiating.",
      "example": "For three fenced sides totaling 40 ft, 2w+L=40 and A(w)=w(40−2w)."
    },
    {
      "id": "applications",
      "name": "Optimization Applications",
      "domain": "Optimization",
      "tip": "Define variables, form a one-variable objective, differentiate, verify global optimality, and state units.",
      "example": "For the 40-ft garden, A(w)=40w−2w² has a maximum at w=10, L=20."
    }
  ],
  "diagnostic": [
    {
      "sub": "critical",
      "stem": "Find all critical numbers of f(x)=3x⁴+12x³.",
      "choices": [
        "−3 and 0",
        "−3 only",
        "0 only",
        "−4 and 0"
      ],
      "answer": 0,
      "steps": "1. f′=12x³+36x². 2. Factor: 12x²(x+3)=0. 3. Thus x=0 or x=−3."
    },
    {
      "sub": "critical",
      "stem": "Find all critical numbers of g(x)=(x²−16)².",
      "choices": [
        "−4 and 4",
        "0 only",
        "−16 and 16",
        "−4, 0, 4"
      ],
      "answer": 3,
      "steps": "1. Chain rule: g′=4x(x²−16). 2. Factor: 4x(x−4)(x+4). 3. Set each factor to zero."
    },
    {
      "sub": "critical",
      "stem": "For h(x)=x²+8/x, which is a critical number?",
      "choices": [
        "−2",
        "4",
        "∛4",
        "0"
      ],
      "answer": 2,
      "steps": "1. Domain excludes x=0. 2. h′=2x−8/x². 3. Multiply equation by x²: 2x³−8=0. 4. x=∛4; 0 is not in the domain."
    },
    {
      "sub": "monotonic",
      "stem": "For f(x)=3x⁴+12x³, where is f decreasing?",
      "choices": [
        "(−∞, −3)",
        "(−3, 0)",
        "(0, ∞)",
        "(−∞, 0)"
      ],
      "answer": 0,
      "steps": "f′=12x²(x+3). The squared factor is positive away from 0; f′<0 exactly when x<−3."
    },
    {
      "sub": "monotonic",
      "stem": "If f′(x)=(x−1)(x+2), where is f decreasing?",
      "choices": [
        "(−∞, −2)",
        "(1, ∞)",
        "(−∞, 1)",
        "(−2, 1)"
      ],
      "answer": 3,
      "steps": "The product is negative between its simple zeros −2 and 1."
    },
    {
      "sub": "monotonic",
      "stem": "For h(x)=x²+8/x, where is h increasing?",
      "choices": [
        "(0, ∛4)",
        "(−∞, ∛4)",
        "(∛4, ∞)",
        "(−∞, 0)"
      ],
      "answer": 2,
      "steps": "h′=2(x³−4)/x². Since x²>0 on the domain, h′>0 exactly when x>∛4."
    },
    {
      "sub": "extrema",
      "stem": "For f(x)=3x⁴+12x³, identify the relative minimum.",
      "choices": [
        "(−3, −81)",
        "(0, 0)",
        "(−3, 81)",
        "No relative minimum"
      ],
      "answer": 0,
      "steps": "f′=12x²(x+3) changes − to + at −3. f(−3)=243−324=−81."
    },
    {
      "sub": "extrema",
      "stem": "If f′ changes from positive to negative at x=2, what occurs?",
      "choices": [
        "Relative minimum at x=2",
        "Inflection point necessarily",
        "No extremum",
        "Relative maximum at x=2"
      ],
      "answer": 3,
      "steps": "Increasing before and decreasing after implies a relative maximum."
    },
    {
      "sub": "extrema",
      "stem": "For q(x)=(x−1)²(x+1)³, with q′=(x−1)(x+1)²(5x−1), where is the relative maximum?",
      "choices": [
        "x=1",
        "x=0",
        "x=1/5",
        "x=−1"
      ],
      "answer": 2,
      "steps": "Sign of q′ is positive before 1/5 and negative just after. At −1 squared factor causes no sign change."
    },
    {
      "sub": "concavity",
      "stem": "For f(x)=3x⁴+12x³, where is f concave down?",
      "choices": [
        "(−2, 0)",
        "(−∞, −2)",
        "(0, ∞)",
        "(−∞, 0)"
      ],
      "answer": 0,
      "steps": "f″=36x(x+2), negative between −2 and 0."
    },
    {
      "sub": "concavity",
      "stem": "If f″(x)=6x−12, where is f concave up?",
      "choices": [
        "(−∞, 2)",
        "(−2, ∞)",
        "Everywhere",
        "(2, ∞)"
      ],
      "answer": 3,
      "steps": "Solve 6x−12>0 to obtain x>2."
    },
    {
      "sub": "concavity",
      "stem": "For y=−⅓x³+3x²+1, where is the graph concave down?",
      "choices": [
        "(0, 3)",
        "Everywhere",
        "(3, ∞)",
        "(−∞, 3)"
      ],
      "answer": 2,
      "steps": "y″=−2x+6, which is negative for x>3."
    },
    {
      "sub": "inflection",
      "stem": "For f(x)=3x⁴+12x³, which are inflection points?",
      "choices": [
        "(−2, −48) and (0, 0)",
        "(−3, −81)",
        "(0, 0) only",
        "(−2, 48) and (0, 0)"
      ],
      "answer": 0,
      "steps": "f″=36x(x+2) changes sign at −2 and 0. Evaluate f at both."
    },
    {
      "sub": "inflection",
      "stem": "For y=−⅓x³+3x²+1, find its inflection point.",
      "choices": [
        "(3, 0)",
        "(0, 1)",
        "(−3, 19)",
        "(3, 19)"
      ],
      "answer": 3,
      "steps": "y″=−2x+6 changes sign at 3. y(3)=−9+27+1=19."
    },
    {
      "sub": "inflection",
      "stem": "For h(x)=x²+8/x, which is an inflection point?",
      "choices": [
        "(−2, 4)",
        "Both −2 and 0",
        "(−2, 0)",
        "(0, 0)"
      ],
      "answer": 2,
      "steps": "h″=2+16/x³ changes sign at −2 and across excluded 0. Only −2 is on the graph; h(−2)=0."
    },
    {
      "sub": "derivgraph",
      "stem": "On the displayed graph of f′, where is f decreasing?",
      "choices": [
        "(−2, 2)",
        "(−∞, −2)",
        "(2, ∞)",
        "Everywhere"
      ],
      "answer": 0,
      "steps": "The drawn derivative is y=x²−4, below the x-axis between −2 and 2.",
      "graph": true
    },
    {
      "sub": "derivgraph",
      "stem": "On the displayed graph of f′, where is f concave up?",
      "choices": [
        "(−∞, 0)",
        "(−2, 2)",
        "Nowhere",
        "(0, ∞)"
      ],
      "answer": 3,
      "steps": "f is concave up where the graph of f′ is rising: to the right of its vertex x=0.",
      "graph": true
    },
    {
      "sub": "derivgraph",
      "stem": "On the displayed graph of f′, where does f have a relative minimum?",
      "choices": [
        "x=0",
        "No minimum",
        "x=2",
        "x=−2"
      ],
      "answer": 2,
      "steps": "f′ changes negative to positive at x=2.",
      "graph": true
    },
    {
      "sub": "second",
      "stem": "If f′(c)=0 and f″(c)>0, the second derivative test gives:",
      "choices": [
        "Relative minimum",
        "Relative maximum",
        "Inflection point",
        "No conclusion"
      ],
      "answer": 0,
      "steps": "Positive f″ means concave up near c, so the stationary point is a relative minimum."
    },
    {
      "sub": "second",
      "stem": "For f(x)=100/x+4x, what does f″(5)>0 establish?",
      "choices": [
        "Relative maximum at x=5",
        "Absolute maximum on all nonzero reals",
        "No critical point",
        "Relative minimum at x=5"
      ],
      "answer": 3,
      "steps": "f′=4−100/x², f″=200/x³. At x=5, f″>0, giving a relative minimum."
    },
    {
      "sub": "second",
      "stem": "If f′(c)=0 and f″(c)=0, what follows?",
      "choices": [
        "Relative maximum",
        "Absolute minimum",
        "The test is inconclusive",
        "Relative minimum"
      ],
      "answer": 2,
      "steps": "The second derivative test does not decide when the second derivative is zero."
    },
    {
      "sub": "absolute",
      "stem": "For f(x)=100/x+4x on (0,∞), identify the absolute minimum.",
      "choices": [
        "(5, 40)",
        "(−5, −40)",
        "(5, 20)",
        "No absolute minimum"
      ],
      "answer": 0,
      "steps": "f′=4−100/x²=0 at x=5; f″>0 for all x>0 and f→∞ at both ends, so f(5)=40 is the absolute minimum."
    },
    {
      "sub": "absolute",
      "stem": "For f(x)=100/x+4x on (−∞,0)∪(0,∞), does f have an absolute minimum?",
      "choices": [
        "Yes, at x=5",
        "Yes, at x=−5",
        "Yes, at x=0",
        "No"
      ],
      "answer": 3,
      "steps": "As x→0 from the left, 100/x+4x→−∞, so no smallest value exists."
    },
    {
      "sub": "absolute",
      "stem": "For f(x)=x² on all real numbers, the absolute minimum is:",
      "choices": [
        "No minimum",
        "(−1, 1)",
        "(0, 0)",
        "(1, 1)"
      ],
      "answer": 2,
      "steps": "x²≥0 for all real x, and equality holds at 0."
    },
    {
      "sub": "model",
      "stem": "A garden uses 40 ft of fence on three sides. Which constraint is correct?",
      "choices": [
        "2w+L=40",
        "2L+2w=40",
        "wL=40",
        "L+w=40"
      ],
      "answer": 0,
      "steps": "Two widths and one length are fenced because the house forms the fourth side."
    },
    {
      "sub": "model",
      "stem": "For the garden with 2w+L=40, which is the area objective in one variable?",
      "choices": [
        "A(w)=40w+2w²",
        "A(w)=2w+40",
        "A(w)=40/w",
        "A(w)=40w−2w²"
      ],
      "answer": 3,
      "steps": "Area=wL and L=40−2w. Substitute to obtain A=w(40−2w)."
    },
    {
      "sub": "model",
      "stem": "A closed cylinder has volume 20π. Which constraint is correct?",
      "choices": [
        "2r+h=20",
        "r²+h=20",
        "r²h=20",
        "rh=20"
      ],
      "answer": 2,
      "steps": "V=πr²h=20π; divide by π."
    },
    {
      "sub": "applications",
      "stem": "A garden against a house uses 40 ft of fence for three sides. What dimensions maximize area?",
      "choices": [
        "10 ft by 20 ft",
        "5 ft by 30 ft",
        "20 ft by 20 ft",
        "8 ft by 24 ft"
      ],
      "answer": 0,
      "steps": "1. 2w+L=40. 2. A=w(40−2w). 3. A′=40−4w=0 gives w=10. 4. L=20. 5. A″=−4<0; global maximum for feasible 0<w<20."
    },
    {
      "sub": "applications",
      "stem": "A closed cylindrical can has volume 20π in³. Which dimensions minimize surface area?",
      "choices": [
        "r=2 in, h=5 in",
        "r=∛20 in, h=∛20 in",
        "r=5 in, h=4 in",
        "r=∛10 in, h=2∛10 in"
      ],
      "answer": 3,
      "steps": "1. h=20/r². 2. S=2πr²+40π/r. 3. S′=4πr−40π/r²=0 ⇒ r³=10. 4. h=20/r²=2r. 5. S″=4π+80π/r³>0; end behavior proves global minimum."
    },
    {
      "sub": "applications",
      "stem": "A 40-tree orchard yields 25 bushels/tree; each additional tree lowers per-tree yield by 0.5. What total tree count maximizes yield?",
      "choices": [
        "50 trees",
        "55 trees",
        "45 trees",
        "40 trees"
      ],
      "answer": 2,
      "steps": "1. Y=(40+x)(25−0.5x)=1000+5x−0.5x². 2. Y′=5−x=0 ⇒ x=5. 3. Y″=−1<0, a global maximum. 4. Total=45 trees."
    }
  ],
  "practice": {
    "critical": [
      {
        "sub": "critical",
        "stem": "Find critical numbers of f(x)=x³−12x.",
        "choices": [
          "2 only",
          "−2 and 2",
          "0",
          "−4 and 4"
        ],
        "answer": 1,
        "steps": "1. f′=3x²−12. 2. 3(x−2)(x+2)=0. 3. x=−2,2."
      },
      {
        "sub": "critical",
        "stem": "Find critical numbers of f(x)=x⁴−8x².",
        "choices": [
          "−2, 0, 2",
          "−4, 4",
          "0 only",
          "−2, 2"
        ],
        "answer": 0,
        "steps": "1. f′=4x³−16x. 2. Factor 4x(x−2)(x+2). 3. Solve each factor."
      },
      {
        "sub": "critical",
        "stem": "Find critical numbers of f(x)=x³−3x².",
        "choices": [
          "0 and 3",
          "−2 and 0",
          "2 only",
          "0 and 2"
        ],
        "answer": 3,
        "steps": "1. f′=3x²−6x. 2. Factor 3x(x−2). 3. x=0,2."
      },
      {
        "sub": "critical",
        "stem": "Why is x=0 NOT critical for f(x)=8/x+x²?",
        "choices": [
          "f″(0)>0",
          "x=0 is always critical",
          "f is undefined at x=0",
          "f′(0)=0"
        ],
        "answer": 2,
        "steps": "A critical number must belong to the domain of the original function. Here division by zero excludes x=0."
      }
    ],
    "monotonic": [
      {
        "sub": "monotonic",
        "stem": "If f′(x)=x²−9, on which intervals is f increasing?",
        "choices": [
          "(0, ∞)",
          "(−∞, −3) and (3, ∞)",
          "(−3, 3)",
          "(−∞, 3)"
        ],
        "answer": 1,
        "steps": "x²−9>0 when |x|>3."
      },
      {
        "sub": "monotonic",
        "stem": "For f′(x)=−(x−2)(x+1), where is f increasing?",
        "choices": [
          "(−1, 2)",
          "(−∞, −1)",
          "(2, ∞)",
          "Everywhere"
        ],
        "answer": 0,
        "steps": "The negative sign reverses the product signs; f′>0 between the roots."
      },
      {
        "sub": "monotonic",
        "stem": "If f′(x)=x²(x−4), where is f decreasing?",
        "choices": [
          "(4, ∞)",
          "(0, ∞)",
          "Nowhere",
          "(−∞, 4) except at x=0"
        ],
        "answer": 3,
        "steps": "x²≥0, so f′ is negative for x<4 except the isolated zero at 0; f is decreasing throughout (−∞,4)."
      },
      {
        "sub": "monotonic",
        "stem": "If f′(x)=3x(x−5), where is f increasing?",
        "choices": [
          "(−∞, 5)",
          "(5, ∞) only",
          "(−∞, 0) and (5, ∞)",
          "(0, 5)"
        ],
        "answer": 2,
        "steps": "A positive-leading quadratic is positive outside roots 0 and 5."
      }
    ],
    "extrema": [
      {
        "sub": "extrema",
        "stem": "If f′(x)=(x−3)(x+1), which critical number is a relative minimum?",
        "choices": [
          "Neither",
          "x=3",
          "x=−1",
          "Both"
        ],
        "answer": 1,
        "steps": "Derivative signs +,−,+; at x=3, −→+."
      },
      {
        "sub": "extrema",
        "stem": "If f′(x)=x², what happens at x=0?",
        "choices": [
          "Neither a relative maximum nor minimum",
          "Relative maximum",
          "Relative minimum",
          "Undefined function"
        ],
        "answer": 0,
        "steps": "f′≥0 on both sides, so there is no sign change."
      },
      {
        "sub": "extrema",
        "stem": "If f′(x)=−(x−1)(x+3), where is a relative maximum?",
        "choices": [
          "x=−3",
          "Both",
          "Neither",
          "x=1"
        ],
        "answer": 3,
        "steps": "Derivative signs −,+,− across −3 and 1; +→− at 1."
      },
      {
        "sub": "extrema",
        "stem": "For h(x)=x²+8/x, where is its relative minimum?",
        "choices": [
          "x=−2",
          "No relative minimum",
          "x=∛4",
          "x=0"
        ],
        "answer": 2,
        "steps": "h′ changes − to + at ∛4. x=0 is excluded."
      }
    ],
    "concavity": [
      {
        "sub": "concavity",
        "stem": "If f″(x)=x²−4, where is f concave up?",
        "choices": [
          "Everywhere",
          "(−∞, −2) and (2, ∞)",
          "(−2, 2)",
          "(−∞, 2)"
        ],
        "answer": 1,
        "steps": "A positive-leading quadratic is positive outside −2,2."
      },
      {
        "sub": "concavity",
        "stem": "If f″(x)=−6x, where is f concave down?",
        "choices": [
          "(0, ∞)",
          "(−∞, 0)",
          "Everywhere",
          "Nowhere"
        ],
        "answer": 0,
        "steps": "−6x<0 when x>0."
      },
      {
        "sub": "concavity",
        "stem": "For f(x)=x⁴, where is f concave up?",
        "choices": [
          "Only (0, ∞)",
          "Only (−∞, 0)",
          "Nowhere",
          "On all real numbers"
        ],
        "answer": 3,
        "steps": "f″=12x²≥0, positive except at 0; the graph is concave up on ℝ."
      },
      {
        "sub": "concavity",
        "stem": "If f″(x)=x(x−5), where is f concave down?",
        "choices": [
          "(5, ∞)",
          "Everywhere",
          "(0, 5)",
          "(−∞, 0)"
        ],
        "answer": 2,
        "steps": "The product is negative between 0 and 5."
      }
    ],
    "inflection": [
      {
        "sub": "inflection",
        "stem": "For f(x)=x³−6x², find the inflection point.",
        "choices": [
          "(4, −32)",
          "(2, −16)",
          "(2, 0)",
          "(0, 0)"
        ],
        "answer": 1,
        "steps": "f″=6x−12 changes sign at x=2. f(2)=8−24=−16."
      },
      {
        "sub": "inflection",
        "stem": "If f″(x)=x², what is true about x=0?",
        "choices": [
          "Not an inflection point",
          "Always an inflection point",
          "Relative maximum",
          "Function undefined"
        ],
        "answer": 0,
        "steps": "f″ is positive on both sides, so concavity does not change."
      },
      {
        "sub": "inflection",
        "stem": "For f(x)=x³+3x, find the inflection point.",
        "choices": [
          "(1, 4)",
          "(−1, −4)",
          "None",
          "(0, 0)"
        ],
        "answer": 3,
        "steps": "f″=6x changes sign at 0, and f(0)=0."
      },
      {
        "sub": "inflection",
        "stem": "For f(x)=x⁴, is x=0 an inflection point?",
        "choices": [
          "Yes, f′(0)=0",
          "Function undefined",
          "No, concavity does not change",
          "Yes, f″(0)=0"
        ],
        "answer": 2,
        "steps": "f″=12x² is positive on both sides of 0."
      }
    ],
    "derivgraph": [
      {
        "sub": "derivgraph",
        "stem": "On the displayed graph of f′, where does f have a relative maximum?",
        "choices": [
          "No maximum",
          "x=−2",
          "x=2",
          "x=0"
        ],
        "answer": 1,
        "steps": "f′ changes positive to negative at x=−2.",
        "graph": true
      },
      {
        "sub": "derivgraph",
        "stem": "On the displayed graph of f′, where does f have an inflection point?",
        "choices": [
          "x=0",
          "x=−2",
          "x=2",
          "None"
        ],
        "answer": 0,
        "steps": "f′ decreases until x=0 and then increases; f″ changes −→+.",
        "graph": true
      },
      {
        "sub": "derivgraph",
        "stem": "On the displayed graph of f′, what are the critical numbers of f?",
        "choices": [
          "0 only",
          "−2, 0, 2",
          "No critical numbers",
          "−2 and 2"
        ],
        "answer": 3,
        "steps": "f′ is zero where its curve crosses the horizontal axis.",
        "graph": true
      },
      {
        "sub": "derivgraph",
        "stem": "On the displayed graph of f′, where is f increasing?",
        "choices": [
          "(0, ∞)",
          "Everywhere",
          "(−∞, −2) and (2, ∞)",
          "(−2, 2)"
        ],
        "answer": 2,
        "steps": "f′ is above the horizontal axis outside the two zeros.",
        "graph": true
      }
    ],
    "second": [
      {
        "sub": "second",
        "stem": "For f(x)=−x²+6x, classify the critical point.",
        "choices": [
          "Inflection point at x=3",
          "Relative maximum at x=3",
          "Relative minimum at x=3",
          "No extremum"
        ],
        "answer": 1,
        "steps": "f′=−2x+6=0 gives x=3; f″=−2<0."
      },
      {
        "sub": "second",
        "stem": "For f(x)=x²−8x, classify the critical point.",
        "choices": [
          "Relative minimum at x=4",
          "Relative maximum at x=4",
          "No extremum",
          "Inflection point at x=4"
        ],
        "answer": 0,
        "steps": "f′=2x−8=0 at 4 and f″=2>0."
      },
      {
        "sub": "second",
        "stem": "For f(x)=x³, what does the second derivative test say at x=0?",
        "choices": [
          "Relative minimum",
          "Relative maximum",
          "Absolute maximum",
          "Inconclusive"
        ],
        "answer": 3,
        "steps": "f′(0)=0 and f″(0)=0. The test is inconclusive; x³ has no extremum there."
      },
      {
        "sub": "second",
        "stem": "For f(x)=−3x²+12x, what is the relative maximum x-value?",
        "choices": [
          "0",
          "4",
          "2",
          "−2"
        ],
        "answer": 2,
        "steps": "f′=−6x+12=0 gives 2; f″=−6<0."
      }
    ],
    "absolute": [
      {
        "sub": "absolute",
        "stem": "For f(x)=−x²+4, what is the absolute maximum on ℝ?",
        "choices": [
          "−4 at x=0",
          "4 at x=0",
          "0 at x=2",
          "No maximum"
        ],
        "answer": 1,
        "steps": "The parabola opens down; vertex (0,4) is the global maximum."
      },
      {
        "sub": "absolute",
        "stem": "For f(x)=x² on ℝ, is there an absolute maximum?",
        "choices": [
          "No",
          "Yes, 0",
          "Yes, 1",
          "Yes, at x=−1"
        ],
        "answer": 0,
        "steps": "x² grows without bound as |x|→∞."
      },
      {
        "sub": "absolute",
        "stem": "For f(x)=100/x+4x on (0,∞), is there an absolute maximum?",
        "choices": [
          "Yes, at x=5",
          "Yes, at x=0",
          "Yes, at x=10",
          "No"
        ],
        "answer": 3,
        "steps": "The function tends to +∞ near x=0+ and as x→∞."
      },
      {
        "sub": "absolute",
        "stem": "For f(x)=x² on [−2,3], what is the absolute maximum?",
        "choices": [
          "0 at x=0",
          "No maximum",
          "9 at x=3",
          "4 at x=−2"
        ],
        "answer": 2,
        "steps": "Check critical point 0 and endpoints −2,3; f(3)=9 is largest."
      }
    ],
    "model": [
      {
        "sub": "model",
        "stem": "For a closed cylinder with volume 20π, express h in terms of r.",
        "choices": [
          "h=r²/20",
          "h=20/r²",
          "h=20r²",
          "h=20/r"
        ],
        "answer": 1,
        "steps": "From r²h=20, divide by r² (r>0)."
      },
      {
        "sub": "model",
        "stem": "For a square-base box of volume 100 cm³, express height h in terms of base side x.",
        "choices": [
          "h=100/x²",
          "h=100x²",
          "h=100/x",
          "h=x²/100"
        ],
        "answer": 0,
        "steps": "V=x²h=100, so h=100/x²."
      },
      {
        "sub": "model",
        "stem": "For the orchard, let x be additional trees. Which is the yield objective?",
        "choices": [
          "Y(x)=40x+25",
          "Y(x)=(40−x)(25+0.5x)",
          "Y(x)=25x",
          "Y(x)=(40+x)(25−0.5x)"
        ],
        "answer": 3,
        "steps": "Total trees 40+x; yield per tree 25−0.5x; multiply."
      },
      {
        "sub": "model",
        "stem": "For a closed cylinder, which is the surface-area objective?",
        "choices": [
          "S=πr²+πrh",
          "S=2πrh only",
          "S=2πr²+2πrh",
          "S=πr²h"
        ],
        "answer": 2,
        "steps": "There are two circular ends and a curved lateral surface."
      }
    ],
    "applications": [
      {
        "sub": "applications",
        "stem": "For the 40-ft garden, what is the maximum area?",
        "choices": [
          "160 ft²",
          "200 ft²",
          "400 ft²",
          "100 ft²"
        ],
        "answer": 1,
        "steps": "Optimal dimensions 10 ft by 20 ft; area=10×20=200 ft²."
      },
      {
        "sub": "applications",
        "stem": "A square-base box has volume 100 cm³. Sides and bottom cost $2/cm²; top costs $5/cm². Which cost function is correct?",
        "choices": [
          "C(x)=7x²+800/x",
          "C(x)=5x²+200/x",
          "C(x)=2x²+800/x",
          "C(x)=7x²+400/x"
        ],
        "answer": 0,
        "steps": "Bottom costs 2x², top costs 5x², and four sides cost 2(4xh)=8xh. Substitute h=100/x² to get C=7x²+800/x."
      },
      {
        "sub": "applications",
        "stem": "For the fabric-covered box, which base side x minimizes cost?",
        "choices": [
          "x=∛100 cm",
          "x=400/7 cm",
          "x=∛(800/7) cm",
          "x=∛(400/7) cm"
        ],
        "answer": 3,
        "steps": "C′=14x−800/x²=0 ⇒ 14x³=800 ⇒ x³=400/7. C″=14+1600/x³>0."
      },
      {
        "sub": "applications",
        "stem": "At the optimum for the 40-tree orchard, what is the predicted total yield?",
        "choices": [
          "1,125 bushels",
          "900 bushels",
          "1,012.5 bushels",
          "1,000 bushels"
        ],
        "answer": 2,
        "steps": "At 45 trees, each yields 25−0.5(5)=22.5 bushels; 45×22.5=1,012.5."
      }
    ]
  },
  "final": [
    {
      "sub": "critical",
      "stem": "Find critical numbers of f(x)=x³−27x.",
      "choices": [
        "3 only",
        "−3 and 3",
        "0 and 3",
        "−9 and 9"
      ],
      "answer": 1,
      "steps": "f′=3x²−27=3(x−3)(x+3). Solve to get −3,3."
    },
    {
      "sub": "critical",
      "stem": "Find critical numbers of f(x)=(x²−9)².",
      "choices": [
        "−3, 0, 3",
        "−9, 0, 9",
        "−3 and 3",
        "0 only"
      ],
      "answer": 0,
      "steps": "f′=4x(x²−9)=4x(x−3)(x+3)."
    },
    {
      "sub": "critical",
      "stem": "Find critical numbers of f(x)=x⁴−2x².",
      "choices": [
        "−2, 0, 2",
        "−1 and 1",
        "0 only",
        "−1, 0, 1"
      ],
      "answer": 3,
      "steps": "f′=4x³−4x=4x(x−1)(x+1)."
    },
    {
      "sub": "monotonic",
      "stem": "If f′(x)=x²−16, where is f decreasing?",
      "choices": [
        "Everywhere",
        "(−4, 4)",
        "(−∞, −4)",
        "(4, ∞)"
      ],
      "answer": 1,
      "steps": "x²−16<0 between −4 and 4."
    },
    {
      "sub": "monotonic",
      "stem": "If f′(x)=−x(x−3), where is f increasing?",
      "choices": [
        "(0, 3)",
        "(−∞, 0)",
        "(3, ∞)",
        "(−∞, 3)"
      ],
      "answer": 0,
      "steps": "The negative of x(x−3) is positive between 0 and 3."
    },
    {
      "sub": "monotonic",
      "stem": "For f′(x)=x²(x+2), where is f increasing?",
      "choices": [
        "(−∞, −2)",
        "(0, ∞) only",
        "(−∞, 0)",
        "(−2, ∞)"
      ],
      "answer": 3,
      "steps": "x²≥0; sign is that of x+2 away from 0. A stationary point at 0 does not break monotonicity."
    },
    {
      "sub": "extrema",
      "stem": "If f′(x)=x(x−4), where is the relative maximum?",
      "choices": [
        "Neither",
        "x=0",
        "x=4",
        "Both"
      ],
      "answer": 1,
      "steps": "Derivative signs +,−,+; +→− at 0."
    },
    {
      "sub": "extrema",
      "stem": "If f′(x)=−x²(x−2), where is the relative maximum?",
      "choices": [
        "x=2",
        "x=0",
        "Both",
        "Neither"
      ],
      "answer": 0,
      "steps": "f′ positive for x<2 except x=0, negative for x>2; at 2 the change is +→−, so actually a maximum."
    },
    {
      "sub": "extrema",
      "stem": "If f′(x)=(x+2)²(x−1), where is the relative minimum?",
      "choices": [
        "x=−2",
        "Both",
        "Neither",
        "x=1"
      ],
      "answer": 3,
      "steps": "The squared factor does not change sign at −2. f′ changes −→+ at 1."
    },
    {
      "sub": "concavity",
      "stem": "If f″(x)=2x+8, where is f concave up?",
      "choices": [
        "Everywhere",
        "(−4, ∞)",
        "(−∞, −4)",
        "(4, ∞)"
      ],
      "answer": 1,
      "steps": "2x+8>0 means x>−4."
    },
    {
      "sub": "concavity",
      "stem": "If f″(x)=−(x−1)(x+3), where is f concave up?",
      "choices": [
        "(−3, 1)",
        "(−∞, −3)",
        "(1, ∞)",
        "Everywhere"
      ],
      "answer": 0,
      "steps": "The negated product is positive between the roots."
    },
    {
      "sub": "concavity",
      "stem": "If f″(x)=x²+1, what is the concavity?",
      "choices": [
        "Concave down everywhere",
        "Changes at 0",
        "Neither",
        "Concave up everywhere"
      ],
      "answer": 3,
      "steps": "x²+1>0 for every real x."
    },
    {
      "sub": "inflection",
      "stem": "For f(x)=x³+2, find the inflection point.",
      "choices": [
        "None",
        "(0, 2)",
        "(0, 0)",
        "(2, 0)"
      ],
      "answer": 1,
      "steps": "f″=6x changes sign at 0; f(0)=2."
    },
    {
      "sub": "inflection",
      "stem": "If f″ changes from negative to positive at x=4 and f(4)=7, identify the inflection point.",
      "choices": [
        "(4, 7)",
        "(7, 4)",
        "(4, 0)",
        "No inflection"
      ],
      "answer": 0,
      "steps": "Concavity changes at a point on the graph, so (4,7) is an inflection point."
    },
    {
      "sub": "inflection",
      "stem": "If f″ changes sign across x=0 but f is undefined at 0, is (0,0) an inflection point?",
      "choices": [
        "Yes, every sign change counts",
        "Yes, always",
        "Only if f′(0)=0",
        "No, the point is not on the graph"
      ],
      "answer": 3,
      "steps": "An inflection point must be a point of the original function."
    },
    {
      "sub": "derivgraph",
      "stem": "On the displayed graph of f′, where is f concave down?",
      "choices": [
        "Nowhere",
        "(−∞, 0)",
        "(0, ∞)",
        "(−2, 2)"
      ],
      "answer": 1,
      "steps": "The graph of f′ is decreasing to the left of its vertex.",
      "graph": true
    },
    {
      "sub": "derivgraph",
      "stem": "On the displayed graph of f′, how many relative extrema does f have?",
      "choices": [
        "2",
        "0",
        "1",
        "3"
      ],
      "answer": 0,
      "steps": "f′ changes sign at each zero, yielding one maximum and one minimum.",
      "graph": true
    },
    {
      "sub": "derivgraph",
      "stem": "On the displayed graph of f′, which is true at x=0?",
      "choices": [
        "f has a relative maximum",
        "f has a relative minimum",
        "f′(0)=0",
        "f has an inflection point, not a relative extremum"
      ],
      "answer": 3,
      "steps": "At x=0 the derivative is −4, not zero; its slope changes from negative to positive.",
      "graph": true
    },
    {
      "sub": "second",
      "stem": "For f(x)=2x²+8x, what is the critical point type?",
      "choices": [
        "None",
        "Relative minimum at x=−2",
        "Relative maximum at x=−2",
        "Relative minimum at x=2"
      ],
      "answer": 1,
      "steps": "f′=4x+8=0 at −2; f″=4>0."
    },
    {
      "sub": "second",
      "stem": "For f(x)=x⁴, what does f″(0)=0 imply by itself?",
      "choices": [
        "The second derivative test is inconclusive",
        "There is no minimum",
        "There is a maximum",
        "There is an inflection point"
      ],
      "answer": 0,
      "steps": "Despite the inconclusive test, x⁴≥0 proves an absolute minimum at x=0."
    },
    {
      "sub": "second",
      "stem": "If f′(c)=0 and f″(c)<0, the point is a:",
      "choices": [
        "Relative minimum",
        "Guaranteed absolute maximum",
        "Guaranteed inflection point",
        "Relative maximum"
      ],
      "answer": 3,
      "steps": "Negative f″ means locally concave down at the critical point."
    },
    {
      "sub": "absolute",
      "stem": "For f(x)=x² on [−1,2], what is the absolute minimum?",
      "choices": [
        "No minimum",
        "0 at x=0",
        "1 at x=−1",
        "4 at x=2"
      ],
      "answer": 1,
      "steps": "The critical point 0 lies in the interval and has the smallest value."
    },
    {
      "sub": "absolute",
      "stem": "For f(x)=−x² on ℝ, what is the absolute maximum?",
      "choices": [
        "0 at x=0",
        "No maximum",
        "1 at x=1",
        "−1 at x=−1"
      ],
      "answer": 0,
      "steps": "−x²≤0 for all x, with equality at x=0."
    },
    {
      "sub": "absolute",
      "stem": "Why does f″(c)<0 alone not prove an absolute maximum?",
      "choices": [
        "It guarantees no maximum",
        "It proves f is increasing everywhere",
        "It excludes endpoints",
        "It only establishes local behavior"
      ],
      "answer": 3,
      "steps": "A local maximum may be smaller than values elsewhere; check the full domain."
    },
    {
      "sub": "model",
      "stem": "Which is the objective equation in an optimization problem?",
      "choices": [
        "The equation set equal to zero first",
        "The quantity to maximize or minimize",
        "Any equation involving variables",
        "Only the domain restriction"
      ],
      "answer": 1,
      "steps": "The objective describes the target, e.g., area, cost, or yield."
    },
    {
      "sub": "model",
      "stem": "Which is a constraint equation?",
      "choices": [
        "A relationship the variables must satisfy",
        "The derivative test",
        "The final maximum value",
        "A sign chart"
      ],
      "answer": 0,
      "steps": "A constraint represents a condition such as fixed volume or fencing length."
    },
    {
      "sub": "model",
      "stem": "Why substitute a constraint into an objective?",
      "choices": [
        "To eliminate all constants",
        "To avoid taking derivatives",
        "To guarantee a maximum",
        "To obtain a one-variable function"
      ],
      "answer": 3,
      "steps": "Standard single-variable calculus optimization differentiates an objective in one independent variable."
    },
    {
      "sub": "applications",
      "stem": "A garden against a house uses 60 ft of fence on three sides. Which dimensions maximize area?",
      "choices": [
        "30 ft by 30 ft",
        "15 ft by 30 ft",
        "20 ft by 20 ft",
        "10 ft by 40 ft"
      ],
      "answer": 1,
      "steps": "2w+L=60, A=60w−2w², A′=60−4w=0 ⇒ w=15, L=30; A″<0."
    },
    {
      "sub": "applications",
      "stem": "A closed cylinder has volume 54π in³. Which radius minimizes surface area?",
      "choices": [
        "3 in",
        "6 in",
        "9 in",
        "∛54 in"
      ],
      "answer": 0,
      "steps": "h=54/r²; S=2πr²+108π/r. S′=4πr−108π/r²=0 ⇒ r³=27 ⇒ r=3."
    },
    {
      "sub": "applications",
      "stem": "For the fabric box with x=∛(400/7), what is the height?",
      "choices": [
        "100∛(400/7) cm",
        "∛(400/7) cm",
        "7/400 cm",
        "100/[∛(400/7)]² cm"
      ],
      "answer": 3,
      "steps": "The volume constraint gives h=100/x²; substitute the optimal base side."
    }
  ]
};
