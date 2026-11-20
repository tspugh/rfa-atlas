window.RFA_DATA = {
  "sections": [
    {
      "id": "1.1",
      "title": "Metrics & norms",
      "summary": "Measure distance between points and size of vectors; separate metric structure from linear structure."
    },
    {
      "id": "1.2",
      "title": "Convergence",
      "summary": "Describe limits, Cauchy sequences and completeness, keeping the ambient space explicit."
    },
    {
      "id": "1.3",
      "title": "Continuity",
      "summary": "Compare local, uniform, sequential and one-sided control of functions."
    },
    {
      "id": "1.4",
      "title": "Topological spaces",
      "summary": "Use open sets to express closeness without a numerical distance."
    },
    {
      "id": "1.5",
      "title": "Metric topology",
      "summary": "Connect balls and metric estimates with open sets, closure and sequential tests."
    },
    {
      "id": "1.6",
      "title": "Compactness",
      "summary": "Relate finite covers, convergent subsequences, total boundedness and existence of extrema."
    },
    {
      "id": "1.7",
      "title": "Finite-dimensional spaces",
      "summary": "Use compact coordinate spheres to compare norms and prove completeness."
    },
    {
      "id": "1.8",
      "title": "Sequence spaces",
      "summary": "Build infinite-dimensional Banach spaces using Young, Hölder and Minkowski inequalities."
    },
    {
      "id": "2.1",
      "title": "Limits of functions",
      "summary": "Distinguish pointwise and uniform limits, then identify what uniform control preserves.",
      "chapter": "2"
    },
    {
      "id": "2.2",
      "title": "Continuous function spaces",
      "summary": "Build Banach spaces and distinguish bounded functions, compact support and vanishing at infinity.",
      "chapter": "2"
    },
    {
      "id": "2.3",
      "title": "Approximation & compactness",
      "summary": "Use polynomial approximation and equicontinuity to recover useful compactness in function spaces.",
      "chapter": "2"
    },
    {
      "id": "2.4",
      "title": "Lipschitz control",
      "summary": "Turn a shared slope bound into equicontinuity and compactness.",
      "chapter": "2"
    },
    {
      "id": "2.5",
      "title": "Completeness & existence",
      "summary": "Choose stronger norms and use compactness or contraction to construct solutions.",
      "chapter": "2"
    },
    {
      "id": "2.6",
      "title": "Lecture exercises",
      "summary": "Use the chapter tools to test closedness, density and compactness in current exercise notes.",
      "chapter": "2"
    },
    {
      "id": "3.1",
      "title": "From Riemann to measure",
      "summary": "Finite rectangular approximations explain both classical integration and the need for countable stability.",
      "chapter": "3"
    },
    {
      "id": "3.2",
      "title": "Lebesgue measure",
      "summary": "Open and compact approximation, null sets, and countable operations.",
      "chapter": "3"
    },
    {
      "id": "3.3",
      "title": "Measurable functions",
      "summary": "Level sets, simple functions, and approximating the range of a function.",
      "chapter": "3"
    },
    {
      "id": "3.4",
      "title": "The Lebesgue integral",
      "summary": "Integrate nonnegative functions first, then signed functions; ignore null sets.",
      "chapter": "3"
    },
    {
      "id": "3.5",
      "title": "Convergence theorems",
      "summary": "Identify the hypotheses that permit limits or iterated integration.",
      "chapter": "3"
    },
    {
      "id": "3.6",
      "title": "Integral inequalities",
      "summary": "Define the Lp quantities and prove their product and triangle estimates.",
      "chapter": "3"
    },
    {
      "id": "3.7",
      "title": "Lᵖ as a Banach space",
      "summary": "Quotient by equality almost everywhere, then separate norm and pointwise convergence.",
      "chapter": "3"
    },
    {
      "id": "3.8",
      "title": "Geometric preparation",
      "summary": "The current personal notes stop at compact neighbourhoods inside open domains.",
      "chapter": "3"
    },
    {
      "id": "3.9",
      "title": "Measure: further connections",
      "summary": "Additional archived connections: subgraphs, regularity criteria, dimension, and the limits of measurability.",
      "chapter": "3"
    },
    {
      "id": "3.10",
      "title": "Density and separability",
      "summary": "Approximate by simple or continuous functions, and distinguish finite-p from the infinity endpoint.",
      "chapter": "3"
    },
    {
      "id": "3.11",
      "title": "Local spaces and convolution",
      "summary": "Local integrability, convolution estimates, and support understood up to null sets.",
      "chapter": "3"
    },
    {
      "id": "3.12",
      "title": "Regularisation and test functions",
      "summary": "Smooth by convolution, approximate in Lp, and detect functions using smooth test functions.",
      "chapter": "3"
    },
    {
      "id": "3.13",
      "title": "Strong compactness in Lp",
      "summary": "Translation control gives local compactness; uniform tails upgrade it to global compactness.",
      "chapter": "3"
    },
    {
      "id": "3.14",
      "title": "Chapter 3 exercise toolkit",
      "summary": "Power tests, scaling, concentration, convergence checks, and explicit source-error checks.",
      "chapter": "3"
    }
  ],
  "nodes": [
    {
      "id": "metrics-norms",
      "title": "Metrics & norms",
      "type": "topic",
      "section": "1.1",
      "reference": "Section 1.1",
      "page": 11,
      "precise": "<p>A metric measures distances on a set. A norm measures vector lengths on a real or complex linear space and induces the metric \\(d(x,y)=\\|x-y\\|\\).</p>",
      "intuition": "<p>The chapter begins with the minimum structure needed to discuss closeness. Addition and scalar multiplication allow stronger geometric tools, but distances can exist without either operation.</p>",
      "example": "<p>In \\(\\mathbb R^2\\), the Euclidean, taxicab and maximum norms have circular, diamond and square unit balls. A discrete metric instead treats all distinct points as one unit apart.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        },
        {
          "date": "2026-09-22",
          "heading": "Norms and notions of closeness",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "metric",
      "title": "Metric space",
      "type": "definition",
      "section": "1.1",
      "reference": "Definition 1.1",
      "page": 11,
      "precise": "<p>A metric on a nonempty set \\(X\\) is a map \\(d:X\\times X\\to[0,\\infty)\\) satisfying, for all \\(x,y,z\\), \\(d(x,y)=0\\iff x=y\\), \\(d(x,y)=d(y,x)\\), and \\(d(x,y)\\le d(x,z)+d(z,y)\\). The pair \\((X,d)\\) is a metric space.</p>",
      "intuition": "<p>These axioms make distance behave geometrically: distinct points are distinguishable, reversing a journey changes nothing, and a detour cannot be shorter than the direct distance.</p>",
      "example": "<p>On \\(\\mathbb R\\), \\(d(x,y)=|x-y|\\). For example, \\(d(1,4)=3\\le d(1,2)+d(2,4)=3\\). The objects called points may also be functions or sequences.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.1"
      ]
    },
    {
      "id": "metric-subspace",
      "title": "Metric subspace",
      "type": "definition",
      "section": "1.1",
      "reference": "Example 1.3",
      "page": 12,
      "precise": "<p>For a metric space \\((X,d)\\) and a nonempty subset \\(Y\\subseteq X\\), restrict the metric to \\(Y\\times Y\\). The pair \\((Y,d|_{Y\\times Y})\\) is a metric subspace.</p>",
      "intuition": "<p>Distances stay the same; the allowed points change. Properties involving whether a limit belongs to the space can therefore change, even though every distance computation is unchanged.</p>",
      "example": "<p>\\(\\mathbb Q\\) with \\(|x-y|\\) is a metric subspace of \\(\\mathbb R\\). Rational approximations to \\(\\sqrt2\\) are Cauchy in both spaces, but have no limit in \\(\\mathbb Q\\).</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "reverse-triangle",
      "title": "Reverse triangle inequality",
      "type": "theorem",
      "section": "1.1",
      "reference": "Exercise 1.5",
      "page": 12,
      "precise": "<p>In every metric space, \\[|d(x,y)-d(x,z)|\\le d(y,z).\\] In a normed space this gives \\(|\\|u\\|-\\|v\\||\\le\\|u-v\\|\\).</p>",
      "intuition": "<p>Changing one endpoint by a small distance can change the measured distance by no more than that amount. Apply the triangle inequality in both directions to control the absolute difference.</p>",
      "example": "<p>Fix \\(a\\in X\\). The distance function \\(f(x)=d(x,a)\\) satisfies \\(|f(x)-f(y)|\\le d(x,y)\\), so choosing \\(\\delta=\\varepsilon\\) proves continuity everywhere.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Apply the triangle inequality as \\(d(x,y)\\le d(x,z)+d(z,y)\\). Rearranging gives \\(d(x,y)-d(x,z)\\le d(y,z)\\).</li><li>Interchange y and z to obtain \\(d(x,z)-d(x,y)\\le d(y,z)\\). Together these control both signs of the difference, giving the absolute-value inequality.</li><li>For the norm version, use the induced metric and set one point to zero: \\(d(u,0)=\\|u\\|\\), \\(d(v,0)=\\|v\\|\\), and \\(d(u,v)=\\|u-v\\|\\).</li></ol><p>Allowing both endpoints to vary, apply the triangle inequality twice to obtain \\(d(x,y)\\le d(x,x\\prime)+d(x\\prime,y\\prime)+d(y\\prime,y)\\), then interchange the pairs. Thus \\[|d(x,y)-d(x\\prime,y\\prime)|\\le d(x,x\\prime)+d(y,y\\prime).\\] This proves that the distance function is jointly continuous for the product metric \\(D((x,y),(x\\prime,y\\prime))=d(x,x\\prime)+d(y,y\\prime)\\), as well as continuous when either endpoint is fixed.</p>",
      "oralQuestions": [
        "1.8"
      ]
    },
    {
      "id": "linear-space",
      "title": "Linear space",
      "type": "definition",
      "section": "1.1",
      "reference": "Definition 1.6",
      "page": 13,
      "precise": "<p>A linear space over \\(\\mathbb F=\\mathbb R\\) or \\(\\mathbb C\\) has addition and scalar multiplication. Addition is commutative and associative, with zero and additive inverses; \\(1x=x\\), \\(\\lambda(\\mu x)=(\\lambda\\mu)x\\), \\((\\lambda+\\mu)x=\\lambda x+\\mu x\\), and \\(\\lambda(x+y)=\\lambda x+\\lambda y\\).</p>",
      "intuition": "<p>Linear combinations are meaningful before any notion of distance is chosen. A vector can be a tuple, an entire sequence or a function; the axioms concern its operations, not its appearance.</p>",
      "example": "<p>The continuous functions \\(C([0,1])\\), with pointwise addition and scalar multiplication, form a real linear space. The zero vector is the function that is zero at every input.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Normed spaces, convexity, and induced metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "norm",
      "title": "Normed linear space",
      "type": "definition",
      "section": "1.1",
      "reference": "Definition 1.7",
      "page": 13,
      "precise": "<p>A norm on a linear space \\(X\\) over \\(\\mathbb R\\) or \\(\\mathbb C\\) is a function \\(\\|\\cdot\\|:X\\to[0,\\infty)\\) such that \\(\\|x\\|=0\\iff x=0\\), \\(\\|\\lambda x\\|=|\\lambda|\\|x\\|\\), and \\(\\|x+y\\|\\le\\|x\\|+\\|y\\|\\). The pair \\((X,\\|\\cdot\\|)\\) is a normed linear space.</p>",
      "intuition": "<p>A norm assigns a length compatible with the vector operations. Homogeneity controls rescaling, while the triangle inequality controls addition and the accumulation of errors.</p>",
      "example": "<p>For \\(x=(3,4)\\), \\(\\|x\\|_2=5\\), \\(\\|x\\|_1=7\\), and \\(\\|x\\|_\\infty=4\\). Each is a valid norm, though the numerical measurements differ.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Norms and notions of closeness",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.2"
      ]
    },
    {
      "id": "induced-metric",
      "title": "A norm induces a metric",
      "type": "theorem",
      "section": "1.1",
      "reference": "Exercise 1.9",
      "page": 14,
      "precise": "<p>If \\((X,\\|\\cdot\\|)\\) is a normed linear space, then \\[d(x,y)=\\|x-y\\|\\] is a metric on \\(X\\). It is translation invariant and satisfies \\(d(\\lambda x,\\lambda y)=|\\lambda|d(x,y)\\).</p>",
      "intuition": "<p>Two vectors are close when their difference is small. The metric axioms follow from norm definiteness, homogeneity with scalar \\(-1\\), and the decomposition \\(x-z=(x-y)+(y-z)\\).</p>",
      "example": "<p>With the maximum norm on \\(\\mathbb R^2\\), the distance from \\((1,2)\\) to \\((4,6)\\) is \\(\\max(3,4)=4\\). Translating both points leaves their difference unchanged.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Normed spaces, convexity, and induced metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        },
        {
          "date": "2026-10-05",
          "heading": "Exercise −1: a norm induces a metric",
          "title": "RFA - 2026-10-05 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Norm nonnegativity gives \\(d(x,y)\\ge0\\), and definiteness gives \\(d(x,y)=0\\iff x-y=0\\iff x=y\\). Homogeneity with scalar \\(-1\\) yields symmetry: \\(\\|x-y\\|=\\|y-x\\|\\).</li><li>Write \\(x-y=(x-z)+(z-y)\\). The norm triangle inequality gives \\(d(x,y)\\le d(x,z)+d(z,y)\\), completing the metric axioms.</li><li>Translating both arguments leaves their difference unchanged. Scaling both arguments gives \\(\\|\\lambda(x-y)\\|=|\\lambda|\\|x-y\\|\\), proving the two additional properties.</li></ol>",
      "oralQuestions": [
        "1.3"
      ]
    },
    {
      "id": "convex-set",
      "title": "Convex set",
      "type": "definition",
      "section": "1.1",
      "reference": "Unnumbered definition after Exercise 1.9",
      "page": 14,
      "precise": "<p>A subset \\(C\\) of a real or complex linear space is convex if \\(tx+(1-t)y\\in C\\) for every \\(x,y\\in C\\) and every real \\(t\\in[0,1]\\).</p>",
      "intuition": "<p>The complete line segment between any two points of the set remains inside it. Convexity is an algebraic-geometric condition; it does not require a particular norm.</p>",
      "example": "<p>A norm ball \\(\\{x:\\|x\\|\\le1\\}\\) is convex because \\(\\|tx+(1-t)y\\|\\le t\\|x\\|+(1-t)\\|y\\|\\le1\\). The circumference of a circle is not convex.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Normed spaces, convexity, and induced metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "linear-subspace",
      "title": "Linear subspace",
      "type": "definition",
      "section": "1.1",
      "reference": "Example 1.13",
      "page": 15,
      "precise": "<p>A nonempty subset \\(M\\) of a linear space \\(X\\) over \\(\\mathbb F\\) is a linear subspace if \\(\\lambda x+\\mu y\\in M\\) for all \\(x,y\\in M\\) and \\(\\lambda,\\mu\\in\\mathbb F\\). A norm on \\(X\\) restricts to a norm on \\(M\\).</p>",
      "intuition": "<p>A subspace must retain every allowed linear combination, including the zero vector. This is much stronger than being a metric subspace: an arbitrary subset inherits distances but usually not all vector operations.</p>",
      "example": "<p>The line \\(M=\\{(t,2t):t\\in\\mathbb R\\}\\) is a real subspace of \\(\\mathbb R^2\\). Its segment with \\(|t|\\le1\\) is a metric subspace but is not closed under multiplication by \\(2\\).</p>",
      "correction": "The discussion on PDF p17 incorrectly calls Q a real linear subspace of R. Q is a metric subspace of R and a vector space over Q, but is not closed under real scalar multiplication.",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Normed spaces, convexity, and induced metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "discrete-metric",
      "title": "Discrete metric",
      "type": "definition",
      "section": "1.1",
      "reference": "Example 1.14",
      "page": 15,
      "precise": "<p>On a set \\(X\\), the discrete metric is \\(d(x,y)=0\\) for \\(x=y\\) and \\(d(x,y)=1\\) otherwise. On a nonzero real or complex vector space, this metric cannot be induced by a norm.</p>",
      "intuition": "<p>Every distinct point is equally far away. Norm-induced distances must respond to rescaling; the discrete metric ignores rescaling as long as the two points remain distinct.</p>",
      "example": "<p>If \\(x\\ne0\\), then \\(d(x,0)=d(2x,0)=1\\). A norm would instead require \\(\\|2x\\|=2\\|x\\|\\). A discrete-metric sequence converges exactly when it is eventually constant at its limit.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "A metric that does not come from a norm",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "norm-balls-convex",
      "title": "Norm balls are convex",
      "type": "theorem",
      "section": "1.1",
      "reference": "Exercise 1.10; theorem in current lecture",
      "page": 14,
      "precise": "<p>The closed unit ball of a normed linear space, \\[B=\\{x\\in X:\\|x\\|\\le1\\},\\] is convex: for all \\(x,y\\in B\\) and \\(t\\in[0,1]\\), the vector \\(tx+(1-t)y\\) belongs to \\(B\\).</p>",
      "intuition": "<p>The triangle inequality and homogeneity turn a convex combination of vectors into a convex combination of their norm bounds. Translation gives the same result for balls centred away from zero.</p>",
      "example": "<p>If \\(\\|x\\|,\\|y\\|\\le1\\) and \\(0\\le t\\le1\\), then \\(\\|tx+(1-t)y\\|\\le t\\|x\\|+(1-t)\\|y\\|\\le1\\). The Euclidean disk, taxicab diamond and maximum-norm square all satisfy this.</p>",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Normed spaces, convexity, and induced metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Take \\(x,y\\) in the closed unit ball and \\(0\\le t\\le1\\). The candidate convex combination is a vector in the same linear space.</li><li>By the triangle inequality and homogeneity, \\(\\|tx+(1-t)y\\|\\le t\\|x\\|+(1-t)\\|y\\|\\). Both coefficients are nonnegative, so the assumptions \\(\\|x\\|,\\|y\\|\\le1\\) give an upper bound \\(t+(1-t)=1\\).</li><li>Thus every point on the segment joining x and y stays in the ball, exactly the definition of convexity. The endpoints \\(t=0,1\\) are included.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "cartesian-product",
      "title": "Cartesian product",
      "type": "definition",
      "section": "1.1",
      "reference": "Example 1.4 (set construction); current lecture definition",
      "page": 12,
      "sourceKind": "current-transcription",
      "lectures": [
        {
          "date": "2026-09-22",
          "heading": "Metrics",
          "title": "RFA - 2026-09-22 - Class Notes"
        }
      ],
      "precise": "<p>For sets \\(X\\) and \\(Y\\), the Cartesian product is \\[X\\times Y=\\{(x,y):x\\in X,\\ y\\in Y\\}.\\] Its elements are ordered pairs. Write \\(X^2=X\\times X\\); higher powers are defined similarly.</p>",
      "intuition": "<p>A product packages one choice from each set into a single object. The order records which component belongs to which set. This gives metrics a domain of pairs of points.</p>",
      "example": "<p>If \\(X=\\{1,2\\}\\) and \\(Y=\\{a,b\\}\\), then \\(X\\times Y=\\{(1,a),(1,b),(2,a),(2,b)\\}\\). A metric on \\(X\\) assigns a distance to each ordered pair in \\(X\\times X\\).</p>",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "convergence-topic",
      "title": "Convergence",
      "type": "topic",
      "section": "1.2",
      "reference": "Section 1.2",
      "page": 16,
      "precise": "<p>Convergence means approaching a point of the space; the Cauchy condition means the sequence eventually becomes internally close. Completeness asserts that these internal approximations always have a limit in the space.</p>",
      "intuition": "<p>Approximation arguments often produce a Cauchy sequence before a candidate limit is known. Completeness is the condition that lets the argument finish without leaving the chosen space.</p>",
      "example": "<p>Rational decimal truncations of \\(\\sqrt2\\) are Cauchy. They converge in \\(\\mathbb R\\), but not in \\(\\mathbb Q\\): the same distances tell a different story when the allowed limits change.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Convergence and Cauchy sequences",
          "title": "RFA - 2026-09-23 - Class Notes"
        },
        {
          "date": "2026-09-23",
          "heading": "Completeness and Banach spaces",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "convergent-sequence",
      "title": "Convergent sequence",
      "type": "definition",
      "section": "1.2",
      "reference": "Definition 1.15",
      "page": 16,
      "precise": "<p>A sequence in \\((X,d)\\) is a map \\(n\\mapsto x_n\\) from \\(\\mathbb N\\) to \\(X\\). It converges to \\(x\\in X\\) if \\[\\forall\\varepsilon&gt;0\\ \\exists N\\ \\forall n\\ge N:\\ d(x_n,x)&lt;\\varepsilon.\\]</p>",
      "intuition": "<p>Every prescribed error tolerance is eventually met forever. The index \\(N\\) may depend on the tolerance; finitely many early terms have no effect on convergence.</p>",
      "example": "<p>In \\(\\mathbb R\\) with its usual metric, \\(x_n=1/n\\to0\\): choose \\(N&gt;1/\\varepsilon\\). The same sequence does not converge to zero in the discrete metric.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Convergence and Cauchy sequences",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.4"
      ]
    },
    {
      "id": "cauchy-sequence",
      "title": "Cauchy sequence",
      "type": "definition",
      "section": "1.2",
      "reference": "Definition 1.15",
      "page": 16,
      "precise": "<p>A sequence \\((x_n)\\) in \\((X,d)\\) is Cauchy if \\[\\forall\\varepsilon&gt;0\\ \\exists N\\ \\forall m,n\\ge N:\\ d(x_m,x_n)&lt;\\varepsilon.\\]</p>",
      "intuition": "<p>The tail becomes arbitrarily small in diameter, without naming a limit. Both indices must be independently large; merely requiring successive terms to become close is insufficient.</p>",
      "example": "<p>The sequence \\(x_n=\\log n\\) has \\(x_{n+1}-x_n\\to0\\) but is not Cauchy: \\(|x_{2n}-x_n|=\\log2\\). By contrast, decimal approximations to \\(\\sqrt2\\) are Cauchy.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Convergence and Cauchy sequences",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "unique-metric-limit",
      "title": "Uniqueness of metric limits",
      "type": "theorem",
      "section": "1.2",
      "reference": "Remark 1.16",
      "page": 16,
      "precise": "<p>If a sequence in a metric space satisfies both \\(x_n\\to x\\) and \\(x_n\\to y\\), then \\(x=y\\).</p>",
      "intuition": "<p>The triangle inequality forces two proposed limits to have distance at most the sum of two errors tending to zero. Definiteness of the metric then identifies the points.</p>",
      "example": "<p>If \\(1/n\\to0\\) and also \\(1/n\\to a\\) in the usual real metric, then \\(|a|\\le|a-1/n|+1/n\\to0\\), so \\(a=0\\). General topological spaces can have nonunique limits.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Convergence and Cauchy sequences",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Assume \\(x_n\\to x\\) and \\(x_n\\to y\\). For every n, the triangle inequality gives \\(d(x,y)\\le d(x,x_n)+d(x_n,y)\\).</li><li>Given \\(\\varepsilon&gt;0\\), both terms on the right are smaller than \\(\\varepsilon/2\\) once n exceeds the two convergence thresholds. Consequently \\(0\\le d(x,y)&lt;\\varepsilon\\) for every positive \\(\\varepsilon\\).</li><li>A fixed nonnegative number smaller than every positive number is zero. Hence \\(d(x,y)=0\\), and metric definiteness forces \\(x=y\\).</li></ol>",
      "oralQuestions": [
        "1.5"
      ]
    },
    {
      "id": "convergent-is-cauchy",
      "title": "Convergent implies Cauchy",
      "type": "theorem",
      "section": "1.2",
      "reference": "Exercise 1.18",
      "page": 17,
      "precise": "<p>Every convergent sequence in a metric space is Cauchy. The converse need not hold unless the space is complete.</p>",
      "intuition": "<p>If two late terms are each within \\(\\varepsilon/2\\) of the same limit, their mutual distance is below \\(\\varepsilon\\) by the triangle inequality. This is the standard two-error argument.</p>",
      "example": "<p>For \\(x_n\\to x\\), choose \\(N\\) so \\(d(x_n,x)&lt;\\varepsilon/2\\) for all \\(n\\ge N\\). Then \\(d(x_m,x_n)\\le d(x_m,x)+d(x,x_n)&lt;\\varepsilon\\).</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Convergence and Cauchy sequences",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Let \\(x_n\\to x\\), and fix \\(\\varepsilon&gt;0\\). Choose N so that \\(d(x_n,x)&lt;\\varepsilon/2\\) for every \\(n\\ge N\\).</li><li>For \\(m,n\\ge N\\), insert the common limit: \\(d(x_n,x_m)\\le d(x_n,x)+d(x,x_m)&lt;\\varepsilon\\). This is the Cauchy condition; the limit need not be one of the sequence terms.</li><li>The reverse implication requires completeness. For example, rational approximations to \\(\\sqrt2\\) form a Cauchy sequence in \\(\\mathbb Q\\), but cannot converge to a rational limit.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "complete-space",
      "title": "Complete metric space",
      "type": "definition",
      "section": "1.2",
      "reference": "Definition 1.19",
      "page": 17,
      "precise": "<p>A metric space is complete if every Cauchy sequence in it converges to a point of that space. A subset is complete when it is complete with the restricted metric.</p>",
      "intuition": "<p>Completeness rules out missing limits detected by Cauchy sequences. It depends on the actual metric and on which points the space contains; it is not a synonym for closedness without an ambient assumption.</p>",
      "example": "<p>\\(\\mathbb R\\) is complete with its usual metric, while \\((0,1)\\) is not: \\(1/(n+1)\\) is Cauchy but tends to the excluded point zero.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Completeness and Banach spaces",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.6"
      ]
    },
    {
      "id": "banach-space",
      "title": "Banach space",
      "type": "definition",
      "section": "1.2",
      "reference": "Definition 1.19",
      "page": 17,
      "precise": "<p>A Banach space is a normed linear space complete for its norm-induced metric \\(d(x,y)=\\|x-y\\|\\). Thus every norm-Cauchy sequence has a norm limit belonging to the space.</p>",
      "intuition": "<p>The vector operations allow algebraic approximation, the norm measures its error, and completeness guarantees a genuine vector at the end. This is the standard setting for infinite-dimensional analysis.</p>",
      "example": "<p>\\(\\mathbb R^n\\) with any norm is Banach. The finitely supported sequences with the \\(\\ell^1\\) norm are not: truncations of \\((2^{-k})_{k\\ge1}\\) converge to a sequence with infinite support.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Completeness and Banach spaces",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.6"
      ]
    },
    {
      "id": "limsup-liminf",
      "title": "Limit superior & limit inferior",
      "type": "definition",
      "section": "1.2",
      "reference": "Unnumbered definitions in Section 1.2",
      "page": 18,
      "precise": "<p>For a real sequence, allow extended-real values and define \\[\\limsup_n x_n=\\inf_N\\sup_{n\\ge N}x_n,\\qquad\\liminf_n x_n=\\sup_N\\inf_{n\\ge N}x_n.\\] For a bounded sequence these are its largest and smallest subsequential limits.</p>",
      "intuition": "<p>Inspect the highest and lowest values that remain possible arbitrarily far along the sequence. Finite initial spikes disappear, but persistent oscillations remain visible.</p>",
      "example": "<p>For \\(x_n=(-1)^n+1/n\\), the even and odd subsequences tend to \\(1\\) and \\(-1\\). Hence \\(\\limsup x_n=1\\), \\(\\liminf x_n=-1\\), and the sequence has no limit.</p>",
      "correction": "PDF p18 repeats the liminf formula as the formula for limsup. The limsup must be the infimum of the tail suprema, as stated here.",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Series, subsequences, and tail behavior",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "bounded-set",
      "title": "Diameter & boundedness",
      "type": "definition",
      "section": "1.2",
      "reference": "Unnumbered definitions in Section 1.2",
      "page": 18,
      "precise": "<p>For nonempty \\(A\\subseteq X\\), \\(\\operatorname{diam}A=\\sup\\{d(x,y):x,y\\in A\\}\\). The set is bounded when this is finite, equivalently when it lies in a ball of finite radius. A function is bounded when its image is bounded.</p>",
      "intuition": "<p>Boundedness controls the largest possible separation at one coarse scale. It does not force points to cluster at arbitrarily small scales, nor ensure that missing limits are present.</p>",
      "example": "<p>The interval \\((0,1)\\) has diameter \\(1\\), even though no pair in the interval attains that distance. An infinite set with the discrete metric is also bounded, with diameter \\(1\\).</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Bounded sets and distance to a set",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "distance-to-set",
      "title": "Distance from a point to a set",
      "type": "definition",
      "section": "1.2",
      "reference": "Unnumbered definition in Section 1.2",
      "page": 18,
      "precise": "<p>For a nonempty subset \\(A\\) of a metric space, \\[d(x,A)=\\inf_{a\\in A}d(x,a).\\] This infimum need not be attained. One has \\(d(x,A)=0\\iff x\\in\\overline A\\).</p>",
      "intuition": "<p>This measures how accurately points of the set can approximate the chosen point. Zero distance means arbitrarily good approximation, rather than necessarily membership in the original set.</p>",
      "example": "<p>In \\(\\mathbb R\\), \\(d(0,(0,1))=0\\), although \\(0\\notin(0,1)\\). For \\(A=[2,3]\\), \\(d(0,A)=2\\), and here the nearest point \\(2\\) does belong to the set.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Bounded sets and distance to a set",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "series-normed-space",
      "title": "Series in a normed space",
      "type": "definition",
      "section": "1.2",
      "reference": "Unnumbered definition in Section 1.2",
      "page": 17,
      "precise": "<p>For \\(x_n\\) in a normed linear space, the series \\(\\sum_{n=1}^{\\infty}x_n\\) converges to \\(s\\) if its partial sums \\(s_N=\\sum_{n=1}^N x_n\\) converge to \\(s\\) in norm.</p>",
      "intuition": "<p>An infinite sum is defined through a sequence of finite sums. Linear structure lets us add the terms; the norm specifies which notion of convergence the partial sums must satisfy.</p>",
      "example": "<p>For a fixed vector \\(v\\), \\(\\sum_{n=1}^{\\infty}2^{-n}v=v\\), since the remainder after \\(N\\) terms has norm \\(2^{-N}\\|v\\|\\). A bare metric space need not permit addition at all.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Series, subsequences, and tail behavior",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "continuity-topic",
      "title": "Continuity",
      "type": "topic",
      "section": "1.3",
      "reference": "Section 1.3",
      "page": 18,
      "precise": "<p>Continuity preserves closeness near each point. Uniform continuity gives one input tolerance for the whole domain. Sequential continuity tests the same local property using convergent sequences in metric spaces.</p>",
      "intuition": "<p>These notions answer how a small perturbation of an input affects an output. The order of the quantifiers tells you whether the estimate is local or works everywhere at once.</p>",
      "example": "<p>The function \\(x\\mapsto x^2\\) is continuous on \\(\\mathbb R\\), but not uniformly continuous there. Restricting it to \\([0,1]\\) gives \\(|x^2-y^2|\\le2|x-y|\\), a uniform estimate.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Continuity in metric spaces",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "metric-continuity",
      "title": "Metric continuity",
      "type": "definition",
      "section": "1.3",
      "reference": "Definition 1.21",
      "page": 18,
      "precise": "<p>For metric spaces \\(X,Y\\), a map \\(f:X\\to Y\\) is continuous at \\(x_0\\) if \\[\\forall\\varepsilon&gt;0\\ \\exists\\delta&gt;0:\\ d_X(x,x_0)&lt;\\delta\\Rightarrow d_Y(f(x),f(x_0))&lt;\\varepsilon.\\] It is continuous on its domain if this holds at every point.</p>",
      "intuition": "<p>Prescribe an output tolerance, then find an input tolerance at the chosen point. The permitted \\(\\delta\\) can depend on both \\(x_0\\) and \\(\\varepsilon\\).</p>",
      "example": "<p>For \\(f(x)=x^2\\), use \\(|x^2-x_0^2|=|x-x_0||x+x_0|\\). If \\(|x-x_0|&lt;1\\), then \\(|x+x_0|\\le2|x_0|+1\\), yielding a suitable \\(\\delta\\).</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Continuity in metric spaces",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.7"
      ]
    },
    {
      "id": "function-limit",
      "title": "Limit of a function",
      "type": "definition",
      "section": "1.3",
      "reference": "Unnumbered definition in Section 1.3",
      "page": 19,
      "precise": "<p>Let \\(f:D\\subseteq X\\to Y\\) and let \\(x_0\\) be an accumulation point of \\(D\\). The statement \\(f(x)\\to y_0\\) as \\(x\\to x_0\\) means that every \\(\\varepsilon&gt;0\\) admits \\(\\delta&gt;0\\) such that \\(x\\in D\\) and \\(0&lt;d_X(x,x_0)&lt;\\delta\\) imply \\(d_Y(f(x),y_0)&lt;\\varepsilon\\).</p>",
      "intuition": "<p>The punctured condition ignores the value at the point itself. Requiring an accumulation point makes the test informative rather than vacuous at an isolated point.</p>",
      "example": "<p>For \\(f(x)=\\sin x/x\\) on \\(\\mathbb R\\setminus\\{0\\}\\), the limit at zero is \\(1\\), though \\(f(0)\\) is undefined. Assigning \\(f(0)=1\\) gives a continuous extension.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Continuity in metric spaces",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "uniform-continuity",
      "title": "Uniform continuity",
      "type": "definition",
      "section": "1.3",
      "reference": "Definition 1.24",
      "page": 19,
      "precise": "<p>A map \\(f:X\\to Y\\) is uniformly continuous if \\[\\forall\\varepsilon&gt;0\\ \\exists\\delta&gt;0\\ \\forall x,y\\in X:\\ d_X(x,y)&lt;\\delta\\Rightarrow d_Y(f(x),f(y))&lt;\\varepsilon.\\]</p>",
      "intuition": "<p>One input tolerance must work at every location. The difference from ordinary continuity is that \\(\\delta\\) cannot depend on the points \\(x,y\\).</p>",
      "example": "<p>For \\(f(x)=x^2\\) on \\(\\mathbb R\\), take \\(x_n=n\\), \\(y_n=n+1/n\\). Their distance tends to zero, while \\(f(y_n)-f(x_n)=2+1/n^2\\); this rules out uniform continuity.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Continuity in metric spaces",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "sequential-continuity",
      "title": "Sequential continuity",
      "type": "definition",
      "section": "1.3",
      "reference": "Definition 1.25",
      "page": 20,
      "precise": "<p>A map \\(f:X\\to Y\\) between metric spaces is sequentially continuous at \\(x\\) if every sequence \\(x_n\\to x\\) in \\(X\\) satisfies \\(f(x_n)\\to f(x)\\) in \\(Y\\).</p>",
      "intuition": "<p>Instead of choosing a radius around a point, test every convergent way of approaching it. A single sequence with the wrong image limit is enough to disprove the property.</p>",
      "example": "<p>The indicator \\(\\mathbf1_{\\mathbb Q}\\) fails this test at zero: irrational numbers \\(x_n=\\sqrt2/n\\to0\\) have images zero, while the value at zero is one.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Sequential continuity",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.9"
      ]
    },
    {
      "id": "continuity-sequential-criterion",
      "title": "Sequential criterion for continuity",
      "type": "theorem",
      "section": "1.3",
      "reference": "Proposition 1.26",
      "page": 20,
      "precise": "<p>For maps between metric spaces, continuity at a point is equivalent to sequential continuity there.</p>",
      "intuition": "<p>Continuity passes every sufficiently small input error to a small output error. Conversely, failure of continuity supplies bad points inside each ball of radius \\(1/n\\), producing a sequence that witnesses the failure.</p>",
      "example": "<p>The identity from \\(\\mathbb R\\) with its usual metric to \\(\\mathbb R\\) with the discrete metric is not continuous: \\(1/n\\to0\\) in the domain, but the images never become equal to zero.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Sequential continuity",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>If f is continuous at x and \\(x_n\\to x\\), fix \\(\\varepsilon&gt;0\\) and choose the continuity radius \\(\\delta\\). Eventually \\(d_X(x_n,x)&lt;\\delta\\), hence \\(d_Y(f(x_n),f(x))&lt;\\varepsilon\\).</li><li>Conversely, negate continuity. There is \\(\\varepsilon_0&gt;0\\) such that every ball around x contains a point whose image is at distance at least \\(\\varepsilon_0\\) from \\(f(x)\\).</li><li>Choose such a point \\(x_n\\) within radius \\(1/n\\). Then \\(x_n\\to x\\), but \\(f(x_n)\\not\\to f(x)\\), contradicting sequential continuity. The countable radii are the key metric-space ingredient.</li></ol>",
      "oralQuestions": [
        "1.LF.1"
      ]
    },
    {
      "id": "semicontinuity",
      "title": "Upper & lower semicontinuity",
      "type": "definition",
      "section": "1.3",
      "reference": "Definition 1.28",
      "page": 20,
      "precise": "<p>A real-valued function on a metric space is upper semicontinuous if \\(\\limsup_n f(x_n)\\le f(x)\\) whenever \\(x_n\\to x\\). It is lower semicontinuous if \\(f(x)\\le\\liminf_n f(x_n)\\) for every such sequence.</p>",
      "intuition": "<p>Upper semicontinuity allows the value at a point to be a peak; lower semicontinuity allows it to be a dip. Being both is equivalent to continuity, by squeezing lower and upper limits.</p>",
      "example": "<p>The function \\(f(x)=0\\) for \\(x&lt;0\\) and \\(f(x)=1\\) for \\(x\\ge0\\) is upper semicontinuous at zero. It is not lower semicontinuous there: approaching from the left gives limit zero below \\(f(0)=1\\).</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Semicontinuity",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "continuity-semicontinuity",
      "title": "Continuity from both semicontinuities",
      "type": "proposition",
      "section": "1.3",
      "reference": "Exercise 1.30; homework in current lecture",
      "page": 21,
      "sourceKind": "current-transcription",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Semicontinuity",
          "title": "RFA - 2026-09-23 - Class Notes"
        }
      ],
      "precise": "<p>A real-valued function on a metric space is continuous at \\(x\\) if and only if it is both upper and lower semicontinuous there. Equivalently, for every \\(x_n\\to x\\), \\[f(x)\\le\\liminf_n f(x_n)\\le\\limsup_n f(x_n)\\le f(x).\\]</p>",
      "intuition": "<p>Upper and lower semicontinuity control the two possible directions of a jump. Together they squeeze every sequence of nearby function values to the value at the point; the sequential criterion gives continuity.</p>",
      "example": "<p>The function \\(f(0)=0\\), \\(f(x)=1\\) for \\(x\\ne0\\), is lower semicontinuous at zero but not upper semicontinuous there. For \\(x_n=1/n\\), \\(f(x_n)=1\\not\\to f(0)\\), so one half alone does not give continuity.</p>",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Continuity at x sends every \\(x_n\\to x\\) to \\(f(x_n)\\to f(x)\\). Thus its liminf and limsup both equal \\(f(x)\\), giving both semicontinuity inequalities.</li><li>Conversely, upper and lower semicontinuity imply \\(f(x)\\le\\liminf f(x_n)\\le\\limsup f(x_n)\\le f(x)\\) for any such sequence.</li><li>The outer terms agree and are finite, so the liminf and limsup agree at \\(f(x)\\). This forces \\(f(x_n)\\to f(x)\\). The sequential criterion for maps between metric spaces then gives continuity at x.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "topology-topic",
      "title": "Topological spaces",
      "type": "topic",
      "section": "1.4",
      "reference": "Section 1.4",
      "page": 21,
      "precise": "<p>A topology specifies the open subsets of a set. Open neighbourhoods then define closure, density, convergence and continuity without choosing a numerical distance.</p>",
      "intuition": "<p>This abstracts the information needed to say that points can be approached or that a function preserves local behaviour. Some familiar metric properties, such as unique limits, need extra hypotheses.</p>",
      "example": "<p>On a set with at least two points, the discrete topology distinguishes every point by an open singleton. The indiscrete topology has only the empty and whole sets open, so every sequence converges to every point.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Topological spaces",
          "title": "RFA - 2026-09-29 - Class Notes"
        },
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "topological-space",
      "title": "Topology, open & closed sets",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.31",
      "page": 21,
      "precise": "<p>A topology \\(\\tau\\) on \\(X\\) is a family of subsets containing \\(\\varnothing,X\\), closed under arbitrary unions and finite intersections. Its members are open. A set is closed if its complement is open; an open set containing \\(x\\) is an open neighbourhood of \\(x\\).</p>",
      "intuition": "<p>The axioms allow local open information to be combined while preserving openness. Closed and open are not opposites in the everyday sense: a set may be both, or neither.</p>",
      "example": "<p>In usual \\(\\mathbb R\\), \\((0,1)\\) is open, \\([0,1]\\) is closed, and \\([0,1)\\) is neither. Both \\(\\varnothing\\) and \\(\\mathbb R\\) are open and closed.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Topological spaces",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.10"
      ]
    },
    {
      "id": "closure",
      "title": "Closure",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.37",
      "page": 22,
      "precise": "<p>The closure of \\(A\\subseteq X\\) is the smallest closed set containing \\(A\\): \\[\\overline A=\\bigcap\\{F:A\\subseteq F,\\ F\\text{ closed}\\}.\\] Equivalently, every open neighbourhood of a point in \\(\\overline A\\) meets \\(A\\).</p>",
      "intuition": "<p>Closure adds points that cannot be separated from the set by an open neighbourhood. The operation fills in all missing limit locations while adding no unnecessary points.</p>",
      "example": "<p>In \\(\\mathbb R\\), \\(\\overline{(0,1)}=[0,1]\\), and \\(\\overline{\\mathbb Q}=\\mathbb R\\). A set is closed exactly when taking its closure changes nothing.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        },
        {
          "date": "2026-10-05",
          "heading": "Problem 3: interior, closure, and boundary",
          "title": "RFA - 2026-10-05 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.11"
      ]
    },
    {
      "id": "dense-set",
      "title": "Dense subset",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.37",
      "page": 22,
      "precise": "<p>A subset \\(A\\) of a topological space \\(X\\) is dense in \\(X\\) when \\(\\overline A=X\\). Equivalently, every nonempty open subset of \\(X\\) meets \\(A\\).</p>",
      "intuition": "<p>The subset comes arbitrarily close, in the topology, to every point of the ambient space. Density does not mean that the set occupies most points or has a large interior.</p>",
      "example": "<p>\\(\\mathbb Q\\) is dense in usual \\(\\mathbb R\\), although its interior is empty. In the discrete topology on \\(\\mathbb R\\), a dense set must contain every point, since every singleton is open.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.11"
      ]
    },
    {
      "id": "accumulation-point",
      "title": "Accumulation point",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.37",
      "page": 22,
      "precise": "<p>The chapter calls \\(x\\) an accumulation point of \\(A\\) if every neighbourhood of \\(x\\) contains infinitely many distinct points of \\(A\\). In metric spaces this is equivalent to every ball around \\(x\\) meeting \\(A\\setminus\\{x\\}\\).</p>",
      "intuition": "<p>The condition detects genuine clustering, rather than merely membership. A point isolated from the other points of the set belongs to its closure but is not an accumulation point.</p>",
      "example": "<p>For \\(A=\\{1/n:n\\ge1\\}\\subset\\mathbb R\\), zero is an accumulation point. Each \\(1/n\\) is isolated within \\(A\\), so it is not an accumulation point.</p>",
      "correction": "The card preserves the chapter's infinitely-many-points convention. Its equivalence to the usual punctured-neighbourhood definition is guaranteed in metric spaces (more generally T1 spaces), not arbitrary topologies.",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "interior",
      "title": "Interior",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.37",
      "page": 22,
      "precise": "<p>A point \\(x\\in A\\) is interior to \\(A\\) if an open neighbourhood of \\(x\\) is contained in \\(A\\). The interior \\(A^\\circ\\) is the set of these points, equivalently the largest open subset of \\(A\\).</p>",
      "intuition": "<p>Interior points have room to move a little while remaining inside the set. The ambient topology determines what counts as a permissible small movement.</p>",
      "example": "<p>In usual \\(\\mathbb R\\), \\([0,1]^\\circ=(0,1)\\), while \\(\\mathbb Q^\\circ=\\varnothing\\). In the subspace \\([0,1]\\) itself, the whole set is open and therefore is its own interior.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        },
        {
          "date": "2026-10-05",
          "heading": "Problem 3: interior, closure, and boundary",
          "title": "RFA - 2026-10-05 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "nowhere-dense",
      "title": "Nowhere dense set",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.37 (corrected)",
      "page": 22,
      "precise": "<p>A subset \\(A\\) of a topological space is nowhere dense if \\[(\\overline A)^\\circ=\\varnothing.\\] Thus even after adding all closure points, the set contains no nonempty open subset.</p>",
      "intuition": "<p>Empty interior alone is weaker: a set can have no open portion yet still be dense everywhere. Nowhere density requires the absence of open portions after closure as well.</p>",
      "example": "<p>\\(\\mathbb Z\\) is nowhere dense in usual \\(\\mathbb R\\), since it is closed with empty interior. \\(\\mathbb Q\\) has empty interior but is not nowhere dense, because its closure is all of \\(\\mathbb R\\).</p>",
      "correction": "PDF p22 says the interior of A is empty; the closure bar is genuinely absent in the rendered PDF. The standard condition is interior of closure empty, also used in the 29 September class notes.",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "separable-space",
      "title": "Separable space",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.39",
      "page": 22,
      "precise": "<p>A topological space is separable if it has a countable dense subset. Here countable allows finite sets as well as countably infinite ones.</p>",
      "intuition": "<p>A single countable collection can approximate every point, even when the whole space is uncountable. This makes many approximation and construction arguments possible using countable data.</p>",
      "example": "<p>Usual \\(\\mathbb R\\) is separable because \\(\\mathbb Q\\) is countable and dense. The uncountable set \\(\\mathbb R\\) with the discrete topology is not separable: its only dense subset is itself.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "boundary",
      "title": "Boundary",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.41",
      "page": 22,
      "precise": "<p>The boundary of \\(A\\subseteq X\\) is \\[\\partial A=X\\setminus\\bigl(A^\\circ\\cup(X\\setminus A)^\\circ\\bigr)=\\overline A\\setminus A^\\circ.\\] Every neighbourhood of a boundary point meets both \\(A\\) and its complement.</p>",
      "intuition": "<p>Boundary points are locations where neither being inside nor being outside is locally secure. A boundary point may belong to the set, but membership is not required.</p>",
      "example": "<p>Both \\((0,1)\\) and \\([0,1]\\) have boundary \\(\\{0,1\\}\\) in \\(\\mathbb R\\). The boundary of \\(\\mathbb Q\\) is all of \\(\\mathbb R\\), since rationals and irrationals are both dense.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Closure, interior, density, and boundary",
          "title": "RFA - 2026-09-29 - Class Notes"
        },
        {
          "date": "2026-10-05",
          "heading": "Problem 3: interior, closure, and boundary",
          "title": "RFA - 2026-10-05 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "topological-convergence",
      "title": "Topological convergence",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.43",
      "page": 23,
      "precise": "<p>A sequence \\((x_n)\\) in a topological space converges to \\(x\\) if each open neighbourhood \\(U\\) of \\(x\\) contains all sufficiently late terms: there exists \\(N\\) with \\(x_n\\in U\\) for every \\(n\\ge N\\).</p>",
      "intuition": "<p>The topology replaces error tolerances with neighbourhood tests. More open sets impose more tests, making convergence harder. Without separation properties, different points may pass every test for the same sequence.</p>",
      "example": "<p>In the discrete topology, convergence to \\(x\\) requires eventual membership in \\(\\{x\\}\\). In the indiscrete topology, the only neighbourhood to test is \\(X\\), so every sequence converges to every point.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Convergence and continuity in a topology",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "topological-continuity",
      "title": "Topological continuity",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.45",
      "page": 23,
      "precise": "<p>A map \\(f:(X,\\tau)\\to(Y,\\sigma)\\) is continuous if \\(f^{-1}(V)\\in\\tau\\) for every \\(V\\in\\sigma\\). At \\(x\\), continuity means that the inverse image of each open neighbourhood of \\(f(x)\\) contains an open neighbourhood of \\(x\\).</p>",
      "intuition": "<p>Open output conditions should already hold throughout an open region of inputs. Global continuity is equivalent to continuity at every point; inverse images are the essential direction.</p>",
      "example": "<p>A constant map is continuous: the inverse image of an open set is either the entire domain or the empty set. Both are always open, regardless of the chosen topologies.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Convergence and continuity in a topology",
          "title": "RFA - 2026-09-29 - Class Notes"
        },
        {
          "date": "2026-10-05",
          "heading": "Exercise 5: pointwise and inverse-image continuity",
          "title": "RFA - 2026-10-05 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "open-map",
      "title": "Open map",
      "type": "definition",
      "section": "1.4",
      "reference": "Definition 1.45",
      "page": 23,
      "precise": "<p>A map \\(f:(X,\\tau)\\to(Y,\\sigma)\\) is open if \\(f(U)\\in\\sigma\\) for every \\(U\\in\\tau\\). This is a condition on direct images of open sets.</p>",
      "intuition": "<p>An open map sends open regions to open regions. It is a different condition from continuity, which concerns inverse images; neither property should be substituted for the other.</p>",
      "example": "<p>The map \\(f:\\mathbb R\\to\\mathbb R\\), \\(f(x)=x^2\\), is continuous but not open: \\(f((-1,1))=[0,1)\\), which is not open in the usual topology of \\(\\mathbb R\\).</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Convergence and continuity in a topology",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "metric-topology-topic",
      "title": "Metric topology",
      "type": "topic",
      "section": "1.5",
      "reference": "Section 1.5",
      "page": 23,
      "precise": "<p>Open balls generate a topology on every metric space. With this topology, metric and topological convergence and continuity agree; sequences also detect closure and closedness.</p>",
      "intuition": "<p>The shrinking balls \\(B_{1/n}(x)\\) turn local topological questions into concrete sequence arguments. This bridge lets us change proof language without changing the property being studied.</p>",
      "example": "<p>To show \\((0,1)\\) is not closed in \\(\\mathbb R\\), use the sequence \\(x_n=1/(n+1)\\). It lies in the set, but its limit zero does not.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "metric-balls",
      "title": "Open & closed balls",
      "type": "definition",
      "section": "1.5",
      "reference": "Unnumbered definitions in Section 1.5",
      "page": 23,
      "precise": "<p>For \\(r&gt;0\\) and \\(a\\in X\\), the open ball is \\(B_r(a)=\\{x:d(x,a)&lt;r\\}\\); the closed ball is \\(\\overline B_r(a)=\\{x:d(x,a)\\le r\\}\\). Here the bar in the closed-ball symbol denotes this inequality definition.</p>",
      "intuition": "<p>Balls describe all points within a prescribed error tolerance. In a general metric space, the closed ball need not equal the closure of the open ball of the same radius.</p>",
      "example": "<p>In the discrete metric, \\(B_1(a)=\\{a\\}\\), while \\(\\overline B_1(a)=X\\). The open singleton is also closed, so its closure remains \\(\\{a\\}\\), showing why the two constructions differ.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "metric-open-set",
      "title": "Open set in a metric space",
      "type": "definition",
      "section": "1.5",
      "reference": "Definition 1.48",
      "page": 24,
      "precise": "<p>A subset \\(G\\) of a metric space is open if for each \\(x\\in G\\) there is \\(r&gt;0\\) such that \\(B_r(x)\\subseteq G\\). The radius may vary with \\(x\\).</p>",
      "intuition": "<p>Every point has a small protective ball that stays inside the set. Openness is local: there is no requirement for a single radius to work at every point.</p>",
      "example": "<p>For \\(x\\in(0,1)\\subset\\mathbb R\\), choose \\(r=\\tfrac12\\min(x,1-x)\\). Then \\((x-r,x+r)\\subset(0,1)\\). The radii shrink as the chosen point approaches an endpoint.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.12"
      ]
    },
    {
      "id": "metric-topology",
      "title": "Metric open sets form a topology",
      "type": "proposition",
      "section": "1.5",
      "reference": "Exercise 1.49",
      "page": 24,
      "precise": "<p>The metric-open subsets of \\(X\\) form a topology \\(\\tau_d\\): they include \\(\\varnothing,X\\), arbitrary unions and finite intersections.</p>",
      "intuition": "<p>For a finite intersection, take the minimum of finitely many positive radii. For a union, one open member containing the point supplies a ball. An infinite minimum need not remain positive.</p>",
      "example": "<p>Each interval \\((-1/n,1)\\) is open in \\(\\mathbb R\\), but their intersection is \\([0,1)\\), which is not. This explains why topology axioms require finite, rather than arbitrary, intersections.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>The empty set is open vacuously. The whole space is open because every ball centred at one of its points is contained in it.</li><li>If x belongs to a union of open sets, it belongs to one member U. A ball about x contained in U is also contained in the union; therefore arbitrary unions are open.</li><li>If x lies in a finite intersection \\(U_1\\cap\\cdots\\cap U_m\\), choose radii \\(r_i&gt;0\\) with \\(B_{r_i}(x)\\subseteq U_i\\). The positive minimum radius works for every set at once. Thus finite intersections are open, completing the topology axioms.</li></ol>",
      "oralQuestions": [
        "1.12"
      ]
    },
    {
      "id": "metric-topology-compatibility",
      "title": "Metric–topological compatibility",
      "type": "proposition",
      "section": "1.5",
      "reference": "Exercises 1.51–1.52",
      "page": 24,
      "precise": "<p>With the topology induced by a metric, metric convergence is equivalent to topological convergence. A map between metric spaces is continuous in the epsilon–delta sense exactly when inverse images of open sets are open.</p>",
      "intuition": "<p>Balls are enough to test all neighbourhoods, because every open neighbourhood contains a ball around the point. The metric and topological formulations therefore describe the same local behaviour.</p>",
      "example": "<p>If every late \\(x_n\\) lies in \\(B_\\varepsilon(x)\\), the metric convergence condition holds. Conversely, an arbitrary open neighbourhood \\(U\\ni x\\) contains some \\(B_r(x)\\), so metric convergence eventually puts the sequence inside \\(U\\).</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Metric convergence implies eventual membership in every open neighborhood of the limit, because such a neighborhood contains a ball. Conversely, the balls \\(B_\\varepsilon(x)\\) are open neighborhoods, so topological convergence gives the metric condition.</li><li>If f is epsilon–delta continuous and V is open in the target, each \\(x\\in f^{-1}(V)\\) has a target ball inside V. Continuity supplies a domain ball mapped into that ball, proving \\(f^{-1}(V)\\) open.</li><li>For the converse, \\(f^{-1}(B_\\varepsilon(f(x)))\\) is open and contains x. A domain ball \\(B_\\delta(x)\\) contained in this inverse image gives exactly the epsilon–delta estimate.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "closed-sequential-criterion",
      "title": "Sequential criterion for closedness",
      "type": "theorem",
      "section": "1.5",
      "reference": "Proposition 1.53",
      "page": 25,
      "precise": "<p>A subset \\(F\\) of a metric space \\(X\\) is closed if and only if \\[x_n\\in F,\\quad x_n\\to x\\text{ in }X\\quad\\Longrightarrow\\quad x\\in F.\\]</p>",
      "intuition": "<p>Closed sets retain all limits that exist in the ambient space. The ambient qualification matters: this criterion does not promise that every Cauchy sequence has a limit.</p>",
      "example": "<p>\\([0,1]\\) is closed in \\(\\mathbb R\\). The set \\((0,1]\\) is not, witnessed by \\(1/n\\to0\\). In contrast, \\(\\mathbb Q\\) is closed in itself but is not complete in its usual metric.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>If F is closed and \\(x_n\\in F\\) converges to x outside F, the open complement contains a ball about x. Convergence eventually places \\(x_n\\) in that ball, contradicting \\(x_n\\in F\\).</li><li>Conversely, suppose F is not closed. Choose \\(x\\in\\overline F\\setminus F\\). Every ball about x meets F, so choose \\(x_n\\in F\\cap B_{1/n}(x)\\).</li><li>Then \\(x_n\\to x\\notin F\\), violating the asserted sequential property. This argument explains why shrinking metric balls recover the entire closure.</li></ol>",
      "oralQuestions": [
        "1.LF.2"
      ]
    },
    {
      "id": "closed-complete",
      "title": "Closed subsets of complete spaces",
      "type": "proposition",
      "section": "1.5",
      "reference": "Exercise 1.54",
      "page": 25,
      "precise": "<p>Let \\(X\\) be a complete metric space and \\(A\\subseteq X\\). Then \\(A\\), with the restricted metric, is complete if and only if \\(A\\) is closed in \\(X\\).</p>",
      "intuition": "<p>Ambient completeness produces a limit for each Cauchy sequence; closedness keeps that limit in the subset. Conversely, completeness of the subset and uniqueness of metric limits force every ambient limit of its sequences to stay inside.</p>",
      "example": "<p>\\([0,1]\\) is complete because it is closed in complete \\(\\mathbb R\\). The closed-in-itself space \\(\\mathbb Q\\) is not complete, showing why the ambient assumption cannot be dropped from the equivalence.</p>",
      "correction": "The current 29 September exercise and archived Exercise 1.54 correctly assume ambient completeness. Archived end-of-chapter Exercise 1.9.16 omits that necessary assumption.",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>If A is closed in complete X, any Cauchy sequence in A is Cauchy in X. It converges to some \\(x\\in X\\), and closedness puts x back in A. Therefore A is complete.</li><li>Conversely, suppose A is complete. Take a sequence in A converging in X to x. It is Cauchy, so completeness of A gives a limit \\(a\\in A\\) in the same metric.</li><li>Uniqueness of metric limits gives \\(x=a\\in A\\). By the sequential closedness criterion, A is closed. This converse does not require ambient completeness; that assumption is needed for the first direction.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "sequential-closure",
      "title": "Sequential description of closure",
      "type": "proposition",
      "section": "1.5",
      "reference": "Equation (6)",
      "page": 25,
      "precise": "<p>In a metric space, \\[\\overline A=\\{x\\in X:\\exists(a_n)\\subseteq A,\\ a_n\\to x\\}.\\] Consequently, \\(A\\) is dense exactly when every point of \\(X\\) is a limit of a sequence in \\(A\\).</p>",
      "intuition": "<p>If every ball around \\(x\\) meets \\(A\\), choose \\(a_n\\in A\\cap B_{1/n}(x)\\). These choices package all closeness scales into one sequence. This sequential description does not hold in every topological space.</p>",
      "example": "<p>For a real number \\(x\\), truncating its decimal expansion gives rationals \\(a_n\\) with \\(|x-a_n|\\le10^{-n}\\). This directly witnesses \\(x\\in\\overline{\\mathbb Q}\\).</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "The topology of a metric space",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>If \\(x\\in\\overline A\\), every ball \\(B_{1/n}(x)\\) meets A. Select \\(a_n\\) from that intersection; then \\(d(a_n,x)&lt;1/n\\), so \\(a_n\\to x\\).</li><li>Conversely, if \\(a_n\\in A\\) and \\(a_n\\to x\\), every ball about x contains all sufficiently late terms and therefore intersects A. Hence x belongs to the closure.</li><li>Finally, A is dense precisely when \\(\\overline A=X\\). Substitute the sequential description just proved: every point of X must be attainable as a limit of a sequence from A.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "compactness-topic",
      "title": "Compactness",
      "type": "topic",
      "section": "1.6",
      "reference": "Section 1.6",
      "page": 26,
      "precise": "<p>In a metric space, compactness has three equivalent forms: every open cover has a finite subcover; every sequence has a convergent subsequence with limit inside; and the space is complete and totally bounded.</p>",
      "intuition": "<p>Compactness is the mechanism that converts approximate solutions into genuine solutions. Finite covering controls the number of distinguishable locations, while completeness prevents limits from escaping.</p>",
      "example": "<p>A minimizing sequence for a continuous real function on a nonempty compact space has a convergent subsequence. Its limit stays in the domain, and continuity makes the limit a minimizer.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Equivalent compactness criteria in metric spaces",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "subsequence",
      "title": "Subsequence",
      "type": "definition",
      "section": "1.6",
      "reference": "Definition 1.56",
      "page": 26,
      "precise": "<p>A subsequence of \\((x_n)\\) has the form \\((x_{n_k})\\), where \\(n_1&lt;n_2&lt;\\cdots\\) are natural numbers. Indices must strictly increase, so order is preserved and indices are not reused.</p>",
      "intuition": "<p>A subsequence selects part of the long-term behaviour. A divergent sequence may contain a well-behaved subsequence, while every subsequence of a convergent sequence has the same limit.</p>",
      "example": "<p>For \\(x_n=(-1)^n\\), the even-index subsequence is constantly \\(1\\) and the odd-index subsequence constantly \\(-1\\). Their different limits prevent the original sequence from converging.</p>",
      "lectures": [
        {
          "date": "2026-09-23",
          "heading": "Series, subsequences, and tail behavior",
          "title": "RFA - 2026-09-23 - Class Notes"
        },
        {
          "date": "2026-09-29",
          "heading": "Sequential compactness",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "sequential-compactness",
      "title": "Sequential compactness",
      "type": "definition",
      "section": "1.6",
      "reference": "Definition 1.57",
      "page": 26,
      "precise": "<p>A subset \\(K\\) of a metric space is sequentially compact if every sequence in \\(K\\) has a subsequence converging to a point of \\(K\\).</p>",
      "intuition": "<p>Any infinite search inside the set contains a convergent pattern that finishes inside the set. Both extraction and retention of the limit are essential.</p>",
      "example": "<p>The interval \\([0,1]\\) is sequentially compact. The interval \\((0,1]\\) is not: every subsequence of \\(1/n\\) still tends to zero, which is missing. The real line fails because \\(x_n=n\\) escapes to infinity.</p>",
      "lectures": [
        {
          "date": "2026-09-29",
          "heading": "Sequential compactness",
          "title": "RFA - 2026-09-29 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.13"
      ]
    },
    {
      "id": "heine-borel",
      "title": "Heine–Borel theorem",
      "type": "theorem",
      "section": "1.6",
      "reference": "Theorem 1.59",
      "page": 27,
      "precise": "<p>For \\(K\\subseteq\\mathbb R^n\\) with its Euclidean metric, \\(K\\) is compact, equivalently sequentially compact, if and only if it is closed and bounded.</p>",
      "intuition": "<p>Boundedness gives a convergent subsequence through Bolzano–Weierstrass, and closedness ensures its limit stays in the set. This simple criterion depends crucially on finite-dimensional Euclidean geometry.</p>",
      "example": "<p>The closed Euclidean unit ball in \\(\\mathbb R^n\\) is compact. In \\(\\ell^2\\), the closed unit ball is not compact: distinct standard basis vectors have distance \\(\\sqrt2\\), so no subsequence is Cauchy.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Sequential compactness in finite dimensions",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>If K is closed and bounded in \\(\\mathbb R^n\\), every sequence in K is bounded. Bolzano–Weierstrass supplies a subsequence converging in \\(\\mathbb R^n\\); closedness keeps its limit in K. Thus K is sequentially compact.</li><li>Conversely, a sequentially compact K is closed by the sequential criterion and uniqueness of limits. If it were unbounded, choose \\(x_j\\in K\\) with \\(\\|x_j\\|_2&gt;j\\). No subsequence could converge, since a convergent sequence is bounded.</li><li>The metric compactness-equivalence theorem converts sequential compactness to the open-cover version. The Euclidean-specific input is Bolzano–Weierstrass, proved independently by nested boxes.</li></ol>",
      "proofNote": "This route uses the later-in-the-chapter metric compactness-equivalence result only to identify open-cover compactness; the closed/bounded ↔ sequential part is independent of it.",
      "oralQuestions": []
    },
    {
      "id": "bolzano-weierstrass",
      "title": "Bolzano–Weierstrass theorem",
      "type": "theorem",
      "section": "1.6",
      "reference": "Theorem 1.60",
      "page": 27,
      "precise": "<p>Every bounded sequence in \\(\\mathbb R^n\\) has a convergent subsequence, with its limit in \\(\\mathbb R^n\\).</p>",
      "intuition": "<p>An infinite bounded collection of terms cannot avoid clustering in finite dimensions. Repeatedly subdividing a bounded box and retaining a part containing infinitely many terms produces a Cauchy subsequence.</p>",
      "example": "<p>The bounded sequence \\(x_n=(-1)^n\\) need not converge, but its even terms form a convergent subsequence. The theorem promises a subsequence, not convergence of the entire sequence.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Sequential compactness in finite dimensions",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Enclose the bounded sequence in a closed cube. Divide that cube into finitely many equal closed subcubes. At least one contains infinitely many indexed sequence terms; retain such a subcube.</li><li>Repeat the subdivision within the retained cube. Obtain nested cubes whose diameters tend to zero, each containing infinitely many sequence terms. Select terms with strictly increasing indices from these cubes.</li><li>For large j, all later selected terms lie in the jth cube, so their pairwise distances are at most its diameter. The selected sequence is Cauchy. Coordinatewise completeness of \\(\\mathbb R\\) gives its limit in \\(\\mathbb R^n\\), without using Heine–Borel.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "open-cover",
      "title": "Open cover & finite subcover",
      "type": "definition",
      "section": "1.6",
      "reference": "Unnumbered definitions in Section 1.6",
      "page": 27,
      "precise": "<p>A family \\(\\{G_\\alpha\\}_{\\alpha\\in I}\\) covers \\(A\\) if \\(A\\subseteq\\bigcup_{\\alpha\\in I}G_\\alpha\\). It is an open cover when all members are open. A finite subcover is a finite selection from that same family whose union still contains \\(A\\).</p>",
      "intuition": "<p>A cover supplies local pieces accounting for every point. A finite subcover must use the original pieces; replacing them with an unrelated larger set would not satisfy the definition.</p>",
      "example": "<p>The intervals \\((-n,n)\\), \\(n\\ge1\\), form an open cover of \\(\\mathbb R\\). Every finite selection has bounded union, so this particular cover has no finite subcover.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Covers, nets, and total boundedness",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "epsilon-net",
      "title": "Finite epsilon-net",
      "type": "definition",
      "section": "1.6",
      "reference": "Unnumbered definition in Section 1.6",
      "page": 27,
      "precise": "<p>For \\(\\varepsilon&gt;0\\), points \\(x_1,\\ldots,x_N\\) form a finite \\(\\varepsilon\\)-net for \\(A\\) if \\[A\\subseteq\\bigcup_{i=1}^{N}B_\\varepsilon(x_i).\\] The chapter permits centres in the ambient metric space.</p>",
      "intuition": "<p>A finite net is a finite list of representatives approximating every point to the chosen accuracy. It discretizes the space at one scale; finer accuracy may require more representatives.</p>",
      "example": "<p>A grid on \\([0,1]\\) with spacing less than \\(\\varepsilon\\), including endpoints, gives a finite \\(\\varepsilon\\)-net. An infinite discrete metric space has no finite net for \\(\\varepsilon&lt;1\\).</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Covers, nets, and total boundedness",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "total-boundedness",
      "title": "Total boundedness",
      "type": "definition",
      "section": "1.6",
      "reference": "Definition 1.61",
      "page": 27,
      "precise": "<p>A subset of a metric space is totally bounded if it has a finite \\(\\varepsilon\\)-net for every \\(\\varepsilon&gt;0\\). Thus finitely many balls of any prescribed positive radius cover it.</p>",
      "intuition": "<p>Ordinary boundedness gives one large enclosure; total boundedness gives finite approximation at every scale. It controls the number of points that can remain mutually separated by a fixed positive amount.</p>",
      "example": "<p>\\((0,1)\\) is totally bounded but not complete. An infinite set with the discrete metric is bounded but not totally bounded: balls of radius \\(1/2\\) contain only one point.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Covers, nets, and total boundedness",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.14"
      ]
    },
    {
      "id": "compactness",
      "title": "Compactness by open covers",
      "type": "definition",
      "section": "1.6",
      "reference": "Definition 1.62",
      "page": 28,
      "precise": "<p>A subset \\(K\\) of a topological space is compact if every open cover of \\(K\\) has a finite subcover. In a metric space, use the topology induced by its metric.</p>",
      "intuition": "<p>Any collection of local open descriptions that reaches every point can be reduced to finitely many members. The quantifier is every open cover, not the existence of a convenient finite one.</p>",
      "example": "<p>The interval \\((0,1]\\) is covered by \\(G_n=(1/n,2)\\), \\(n\\ge1\\). Any finite selection misses sufficiently small positive points, so \\((0,1]\\) is not compact.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Covers, nets, and total boundedness",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.15"
      ]
    },
    {
      "id": "total-bounded-implies-bounded",
      "title": "Totally bounded implies bounded",
      "type": "proposition",
      "section": "1.6",
      "reference": "Exercise 1.64",
      "page": 28,
      "precise": "<p>Every totally bounded subset of a metric space is bounded. The converse is false in general.</p>",
      "intuition": "<p>Choose a finite cover by balls of radius \\(1\\). Their finitely many centres have a finite maximum mutual distance; two points of the set are at most that distance plus \\(2\\) apart.</p>",
      "example": "<p>An infinite discrete metric space has diameter \\(1\\), so it is bounded. Yet radius-\\(1/2\\) balls are singletons, and finitely many cannot cover the space. This gives a direct counterexample to the converse.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Covers, nets, and total boundedness",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>The empty set is bounded. Otherwise choose a finite cover \\(A\\subseteq\\bigcup_{i=1}^m B_1(c_i)\\), possible by total boundedness, and fix a point \\(a_0\\in A\\).</li><li>The finite set of centre distances has a maximum \\(R=\\max_i d(a_0,c_i)\\). For any \\(a\\in A\\), some centre satisfies \\(d(a,c_i)&lt;1\\), so \\(d(a,a_0)&lt;1+R\\). Thus A lies in one bounded ball.</li><li>The converse fails for an infinite set with discrete distance one: its diameter is one, but balls of radius \\(1/2\\) are singletons and cannot cover it finitely. No chaining of possibly disjoint covering balls is needed.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "compactness-equivalence",
      "title": "Three criteria for compactness",
      "type": "theorem",
      "section": "1.6",
      "reference": "Theorem 1.65",
      "page": 28,
      "precise": "<p>For a subset \\(K\\) of a metric space, the following are equivalent: \\(K\\) is compact; \\(K\\) is sequentially compact; \\(K\\), with the restricted metric, is complete and totally bounded.</p>",
      "intuition": "<p>Total boundedness prevents an infinite sequence of points at a fixed mutual separation. Completeness supplies the limit of the Cauchy subsequence extracted from finer and finer finite nets.</p>",
      "example": "<p>\\((0,1)\\) has finite nets at every scale but misses a limit, so it is not compact. An infinite discrete space is complete but lacks finite small nets, so it too is not compact.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Equivalent compactness criteria in metric spaces",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li><strong>Compact → sequentially compact.</strong> If no subsequence converges, each point has a neighborhood containing only finitely many indexed terms. A finite subcover would contain only finitely many terms, a contradiction.</li><li><strong>Sequentially compact → complete and totally bounded.</strong> A Cauchy sequence has a convergent subsequence, and the Cauchy property forces the whole sequence to the same limit. Failure of a finite \\(\\varepsilon\\)-net constructs an \\(\\varepsilon\\)-separated sequence, contradicting sequential compactness.</li><li><strong>Complete and totally bounded → sequentially compact.</strong> Successively restrict to infinitely many terms in one ball from finite covers with radii \\(2^{-j}\\). An increasing-index diagonal selection is Cauchy, hence convergent.</li><li><strong>Sequentially compact → compact.</strong> An open cover has a uniform ball radius \\(\\delta&gt;0\\) such that every \\(B_\\delta(x)\\cap K\\) lies in some cover member. Otherwise choose failing centres \\(x_n\\) for radii \\(1/n\\); a convergent subsequence and an open set containing its limit contradict failure. A finite \\(\\delta/2\\)-net now gives a finite subcover.</li></ol>",
      "proofNote": "The last two steps supply the longer direction omitted from the current handwritten proof. The uniform-ball-radius argument is proved here rather than assumed as a separate compactness theorem.",
      "oralQuestions": [
        "1.LF.3",
        "1.LF.4"
      ]
    },
    {
      "id": "metric-density",
      "title": "Metric criterion for density",
      "type": "theorem",
      "section": "1.6",
      "reference": "Lemma 1.66",
      "page": 28,
      "precise": "<p>For \\(A\\subseteq(X,d)\\), \\(A\\) is dense in \\(X\\) if and only if \\[\\forall x\\in X\\ \\forall\\varepsilon&gt;0\\ \\exists a\\in A:\\ d(x,a)&lt;\\varepsilon.\\]</p>",
      "intuition": "<p>Every target point can be approximated to every positive accuracy using elements of one fixed set. Choosing accuracy \\(1/n\\) converts the criterion into a sequence approaching the target.</p>",
      "example": "<p>Given \\(x\\in\\mathbb R\\) and \\(\\varepsilon&gt;0\\), choose \\(n\\) with \\(1/n&lt;\\varepsilon\\) and an integer \\(m\\) such that \\(m/n\\le x&lt;(m+1)/n\\). Then the rational \\(m/n\\) approximates \\(x\\).</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Density and separability",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>By the closure definition, x belongs to \\(\\overline A\\) exactly when every open neighborhood of x intersects A. In a metric space, it is enough to test balls because each open neighborhood contains one.</li><li>Hence \\(\\overline A=X\\) is equivalent to saying that every \\(B_\\varepsilon(x)\\) meets A, for every x and every positive \\(\\varepsilon\\).</li><li>Membership in that intersection is exactly the existence of \\(a\\in A\\) with \\(d(x,a)&lt;\\varepsilon\\). This gives both implications and shows why arbitrarily accurate approximations characterize density.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "compact-separable",
      "title": "Compact metric spaces are separable",
      "type": "theorem",
      "section": "1.6",
      "reference": "Lemma 1.67",
      "page": 28,
      "precise": "<p>Every sequentially compact metric space, equivalently every compact metric space, is separable.</p>",
      "intuition": "<p>Take a finite \\(1/n\\)-net for every positive integer \\(n\\), with centres in the space. Their union is countable, and arbitrarily fine nets ensure that this union is dense.</p>",
      "example": "<p>On \\([0,1]\\), the union of finite dyadic grids \\(\\{k/2^n:0\\le k\\le2^n\\}\\) is countable and dense. This is the finite-net construction in a concrete form.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Density and separability",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Sequential compactness gives total boundedness: otherwise one could recursively choose points all at least some fixed \\(\\varepsilon\\) apart, which have no convergent subsequence.</li><li>For each positive integer n, choose a finite \\(1/n\\)-net \\(D_n\\) with centres in K, and set \\(D=\\bigcup_nD_n\\). This is countable because it is a countable union of finite sets.</li><li>Given \\(x\\in K\\) and \\(\\varepsilon&gt;0\\), choose n with \\(1/n&lt;\\varepsilon\\). Some centre \\(z\\in D_n\\) satisfies \\(d(x,z)&lt;\\varepsilon\\). Therefore D is dense. If a net initially has ambient centres, replace each useful centre by a nearby point of K and start at half the desired radius.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "compact-closed-bounded",
      "title": "Compact sets are closed & bounded",
      "type": "theorem",
      "section": "1.6",
      "reference": "Lemma 1.68",
      "page": 29,
      "precise": "<p>Every compact subset \\(K\\) of a metric space \\(X\\) is closed in \\(X\\) and bounded.</p>",
      "intuition": "<p>Sequential compactness and uniqueness of metric limits keep all ambient limits inside \\(K\\). Total boundedness gives boundedness. The reverse implication requires additional structure, such as finite dimension.</p>",
      "example": "<p>The closed unit ball of \\(\\ell^2\\) is closed and bounded but not compact: its standard unit vectors remain pairwise \\(\\sqrt2\\) apart. This prevents the metric statement from being reversed in general.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Closedness, boundedness, and precompactness",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>For closedness, take \\(x_n\\in K\\) converging in the ambient space to x. Compactness supplies a subsequence converging to \\(a\\in K\\). That subsequence also converges to x, so uniqueness gives \\(x=a\\in K\\). The sequential criterion makes K closed.</li><li>For boundedness, cover K by unit balls centred at its points and choose finitely many of them. Fix a point of K; its distances to the finitely many centres have a finite maximum.</li><li>The triangle inequality bounds every point of K by that maximum plus one. The empty set satisfies both conclusions trivially.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "precompactness",
      "title": "Precompactness",
      "type": "definition",
      "section": "1.6",
      "reference": "Definition 1.69",
      "page": 29,
      "precise": "<p>A subset \\(A\\) of a metric space \\(X\\) is precompact, or relatively compact, if its closure \\(\\overline A\\) in \\(X\\) is compact.</p>",
      "intuition": "<p>A precompact set may omit its limit points, provided adding them inside the ambient space yields a compact set. Specifying the ambient space matters because closure is taken there.</p>",
      "example": "<p>The interval \\((0,1)\\) is precompact in \\(\\mathbb R\\), since its closure is compact \\([0,1]\\), but it is not itself compact. In \\(\\mathbb R^n\\), a subset is precompact exactly when it is bounded.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Closedness, boundedness, and precompactness",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "continuous-image-compact",
      "title": "Continuous images preserve compactness",
      "type": "theorem",
      "section": "1.6",
      "reference": "Theorem 1.71",
      "page": 29,
      "precise": "<p>If \\(K\\) is a compact metric space and \\(f:K\\to Y\\) is continuous into a metric space \\(Y\\), then \\(f(K)\\) is compact in \\(Y\\).</p>",
      "intuition": "<p>A sequence of output values has chosen inputs in \\(K\\). Compactness yields a convergent input subsequence, and continuity transfers its convergence to the outputs. The limiting output remains in the image.</p>",
      "example": "<p>The map \\(t\\mapsto(\\cos t,\\sin t)\\) is continuous on compact \\([0,2\\pi]\\). Its image is the unit circle, so the circle is compact.</p>",
      "lectures": [
        {
          "date": "2026-09-30",
          "heading": "Continuous images of compact sets",
          "title": "RFA - 2026-09-30 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Take any open cover \\(\\{V_\\alpha\\}\\) of \\(f(K)\\). Continuity makes each inverse image \\(f^{-1}(V_\\alpha)\\) open in K.</li><li>These inverse images cover K, since every \\(f(x)\\) belongs to at least one \\(V_\\alpha\\). Compactness of K therefore selects finitely many inverse images covering K.</li><li>The corresponding finitely many target sets cover \\(f(K)\\): each image point comes from a domain point in one of those inverse images. Thus every open cover of the image has a finite subcover, proving compactness without requiring f to be injective.</li></ol>",
      "oralQuestions": [
        "1.16"
      ]
    },
    {
      "id": "heine-cantor",
      "title": "Heine–Cantor theorem",
      "type": "theorem",
      "section": "1.6",
      "reference": "Theorem 1.72",
      "page": 29,
      "precise": "<p>A continuous map from a compact metric space \\(K\\) into a metric space \\(Y\\) is uniformly continuous.</p>",
      "intuition": "<p>Compactness upgrades pointwise input tolerances to a tolerance valid everywhere. In the sequential proof, a hypothetical failure produces close input pairs whose outputs stay apart; a convergent subsequence and continuity contradict this.</p>",
      "example": "<p>\\(f(x)=x^2\\) is uniformly continuous on \\([0,1]\\), where \\(|x^2-y^2|\\le2|x-y|\\). It is not uniformly continuous on \\(\\mathbb R\\), which is not compact.</p>",
      "lectures": [
        {
          "date": "2026-10-02",
          "heading": "Continuous maps on compact metric spaces",
          "title": "RFA - 2026-10-02 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>If f were not uniformly continuous, some \\(\\varepsilon_0&gt;0\\) would allow pairs \\(x_n,y_n\\in K\\) with \\(d_X(x_n,y_n)&lt;1/n\\) but \\(d_Y(f(x_n),f(y_n))\\ge\\varepsilon_0\\).</li><li>Compactness gives a subsequence \\(x_{n_k}\\to x\\in K\\). The triangle inequality and the shrinking pair distances imply \\(y_{n_k}\\to x\\) as well.</li><li>Continuity at x sends both image subsequences to \\(f(x)\\). Their mutual distance therefore tends to zero, contradicting its fixed lower bound. Compactness is what lets the potentially moving bad pairs accumulate at one point where continuity applies.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "extreme-value",
      "title": "Extreme-value theorem",
      "type": "theorem",
      "section": "1.6",
      "reference": "Theorem 1.73",
      "page": 30,
      "precise": "<p>If \\(K\\) is a nonempty compact metric space and \\(f:K\\to\\mathbb R\\) is continuous, then \\(f\\) is bounded and attains both extrema: there exist \\(x_{\\min},x_{\\max}\\in K\\) with \\(f(x_{\\min})=\\min_K f\\) and \\(f(x_{\\max})=\\max_K f\\).</p>",
      "intuition": "<p>Choose a sequence with values approaching the infimum. Compactness extracts a limit inside \\(K\\), and continuity transfers the limiting value. Apply the same argument to \\(-f\\) for a maximum.</p>",
      "example": "<p>On \\([0,1]\\), \\(f(x)=x\\) attains minimum zero and maximum one. On \\((0,1)\\), the same continuous bounded function attains neither: the candidate extremizers lie outside its domain.</p>",
      "correction": "The archived Theorem 1.73 does not explicitly state K nonempty and writes extremizers in X. The precise statement requires a nonempty K and extremizers belonging to K.",
      "lectures": [
        {
          "date": "2026-10-02",
          "heading": "Continuous functions attain extrema",
          "title": "RFA - 2026-10-02 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>The continuous image \\(f(K)\\) is nonempty and compact in \\(\\mathbb R\\), hence bounded. Its infimum m and supremum M are therefore finite.</li><li>Choose \\(x_n\\in K\\) with \\(m\\le f(x_n)&lt;m+1/n\\). Compactness extracts \\(x_{n_k}\\to x_{\\min}\\in K\\). Continuity gives \\(f(x_{\\min})=\\lim_k f(x_{n_k})=m\\).</li><li>Apply the same argument to \\(-f\\) to obtain a maximizer of f. Nonemptiness is necessary to select the minimizing sequence and to have actual points attaining the extrema.</li></ol>",
      "oralQuestions": [
        "1.17"
      ]
    },
    {
      "id": "finite-dimensional-topic",
      "title": "Finite-dimensional spaces",
      "type": "topic",
      "section": "1.7",
      "reference": "Section 1.7",
      "page": 31,
      "precise": "<p>In a finite-dimensional real or complex linear space, every norm is comparable to the coordinate \\(\\ell^1\\) norm. Consequently all norms are equivalent, and every normed space of finite dimension is complete.</p>",
      "intuition": "<p>Compactness of a coordinate unit sphere turns an everywhere-positive continuous norm into a uniform positive lower bound. Finite coordinates then reduce completeness to completeness of scalars.</p>",
      "example": "<p>On \\(\\mathbb R^n\\), \\(\\|x\\|_\\infty\\le\\|x\\|_1\\le n\\|x\\|_\\infty\\). Thus either norm gives the same convergent and Cauchy sequences, even though their unit balls look different.</p>",
      "lectures": [
        {
          "date": "2026-10-02",
          "heading": "Equivalent norms",
          "title": "RFA - 2026-10-02 - Class Notes"
        },
        {
          "date": "2026-10-06",
          "heading": "Finite-dimensional normed spaces are complete",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "equivalent-norms",
      "title": "Equivalent norms",
      "type": "definition",
      "section": "1.7",
      "reference": "Definition 1.74",
      "page": 31,
      "precise": "<p>Two norms on the same linear space are equivalent if there are constants \\(c,C&gt;0\\), independent of \\(x\\), such that \\[c\\|x\\|_1\\le\\|x\\|_2\\le C\\|x\\|_1\\quad\\text{for all }x.\\]</p>",
      "intuition": "<p>Each norm controls the other by fixed factors. They therefore give the same topology, convergent sequences and Cauchy sequences; differences in numerical size cannot change whether an error tends to zero.</p>",
      "example": "<p>On \\(\\mathbb R^n\\), \\(\\|x\\|_\\infty\\le\\|x\\|_2\\le\\sqrt n\\|x\\|_\\infty\\). On finitely supported infinite sequences, \\(\\|\\cdot\\|_1\\) and \\(\\|\\cdot\\|_\\infty\\) are not equivalent: vectors with \\(n\\) ones have ratio \\(n\\).</p>",
      "lectures": [
        {
          "date": "2026-10-02",
          "heading": "Equivalent norms",
          "title": "RFA - 2026-10-02 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.18"
      ]
    },
    {
      "id": "coordinate-norm-estimate",
      "title": "Coordinate norm estimate",
      "type": "theorem",
      "section": "1.7",
      "reference": "Lemma 1.75",
      "page": 31,
      "precise": "<p>Let \\(e_1,\\ldots,e_n\\) be a basis of a finite-dimensional normed linear space. There exist \\(m,M&gt;0\\) such that \\[m\\sum_{i=1}^n|x_i|\\le\\Bigl\\|\\sum_{i=1}^n x_i e_i\\Bigr\\|\\le M\\sum_{i=1}^n|x_i|.\\]</p>",
      "intuition": "<p>The upper bound follows from the triangle inequality. For the lower bound, minimize the continuous norm on the compact coordinate sphere \\(\\sum|x_i|=1\\); linear independence makes that minimum positive.</p>",
      "example": "<p>For the standard basis of Euclidean \\(\\mathbb R^n\\), one may choose \\(m=1/\\sqrt n\\) and \\(M=1\\). For complex scalars, the compactness argument uses \\(\\mathbb C^n\\cong\\mathbb R^{2n}\\).</p>",
      "lectures": [
        {
          "date": "2026-10-02",
          "heading": "All finite-dimensional norms are equivalent",
          "title": "RFA - 2026-10-02 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Write \\(T(a)=\\sum_i a_i e_i\\) and \\(|a|_1=\\sum_i|a_i|\\). The triangle inequality gives \\(\\|T(a)\\|\\le M|a|_1\\), with \\(M=\\max_i\\|e_i\\|\\).</li><li>This upper bound and the reverse triangle inequality make \\(a\\mapsto\\|T(a)\\|\\) continuous in Euclidean coordinates; explicitly \\(|a|_1\\le\\sqrt n|a|_2\\). On the coordinate sphere \\(S=\\{a:|a|_1=1\\}\\), Euclidean Heine–Borel gives compactness.</li><li>The continuous function attains its minimum m on S. Linear independence makes it positive everywhere on S, so \\(m&gt;0\\). Apply this minimum estimate to \\(a/|a|_1\\) and rescale to obtain the lower bound. The zero vector is immediate.</li></ol>",
      "proofNote": "This avoids assuming norm equivalence or completeness of the unknown norm. For complex coordinates, use the Euclidean identification C^n ≅ R^(2n). The zero-dimensional space is trivial.",
      "oralQuestions": [
        "1.LF.5"
      ]
    },
    {
      "id": "finite-dimensional-banach",
      "title": "Finite-dimensional spaces are Banach",
      "type": "theorem",
      "section": "1.7",
      "reference": "Theorem 1.76",
      "page": 32,
      "precise": "<p>Every finite-dimensional normed linear space over \\(\\mathbb R\\) or \\(\\mathbb C\\) is a Banach space.</p>",
      "intuition": "<p>The lower coordinate estimate makes each coordinate of a norm-Cauchy sequence Cauchy. The scalars have limits; the upper estimate then proves convergence of the reconstructed vector in the original norm.</p>",
      "example": "<p>If \\(x^{(k)}=(a_k,b_k)\\) is Cauchy in any norm on \\(\\mathbb R^2\\), then \\(a_k\\to a\\) and \\(b_k\\to b\\). The estimate \\(\\|x^{(k)}-(a,b)\\|\\le M(|a_k-a|+|b_k-b|)\\) finishes the proof.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Finite-dimensional normed spaces are complete",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Choose a basis and use the coordinate estimate \\(m|a|_1\\le\\|T(a)\\|\\le M|a|_1\\). If \\(x^{(k)}=T(a^{(k)})\\) is Cauchy in the given norm, the lower estimate makes each scalar coordinate sequence Cauchy.</li><li>Completeness of \\(\\mathbb R\\), or of \\(\\mathbb C\\) via real and imaginary parts, supplies limits \\(a_i\\). Because there are only finitely many coordinates, \\(\\sum_i|a_i^{(k)}-a_i|\\to0\\).</li><li>Set \\(x=T(a)\\). The upper estimate gives \\(\\|x^{(k)}-x\\|\\le M\\sum_i|a_i^{(k)}-a_i|\\to0\\). Thus the limit belongs to the original space, proving completeness without assuming it in the coordinate estimate.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "finite-dimensional-subspaces",
      "title": "Subspaces in finite dimensions",
      "type": "theorem",
      "section": "1.7",
      "reference": "Theorem 1.76 consequence (current lecture formulation)",
      "page": 32,
      "precise": "<p>Every linear subspace of a finite-dimensional normed linear space is a Banach space with the restricted norm.</p>",
      "intuition": "<p>A subspace of a finite-dimensional space is itself finite-dimensional. The completeness theorem therefore applies directly. This is the formulation explicitly recorded in the 6 October lecture.</p>",
      "example": "<p>The line \\(M=\\{(t,2t):t\\in\\mathbb R\\}\\) in Euclidean \\(\\mathbb R^2\\) is complete. A Cauchy sequence \\((t_n,2t_n)\\) has \\(t_n\\to t\\), so its limit \\((t,2t)\\) still belongs to the line.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Finite-dimensional normed spaces are complete",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Let Y be a linear subspace of finite-dimensional X. Linear algebra gives a finite basis for Y; its dimension is at most that of X.</li><li>The restricted norm remains a norm: definiteness, homogeneity and the triangle inequality are inherited because the vector operations on Y are those of X.</li><li>Therefore Y is itself a finite-dimensional normed space, and the finite-dimensional completeness theorem applies directly. Equivalently, expand a Cauchy sequence in a basis of Y, take the finitely many scalar limits, and form their linear combination in Y. No prior assertion that Y is closed is needed.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "finite-norm-equivalence",
      "title": "All finite-dimensional norms are equivalent",
      "type": "theorem",
      "section": "1.7",
      "reference": "Theorem 1.78",
      "page": 32,
      "precise": "<p>Any two norms on a finite-dimensional real or complex linear space are equivalent. If \\(m_j\\|x\\|_{\\mathrm{coord}}\\le\\|x\\|_j\\le M_j\\|x\\|_{\\mathrm{coord}}\\), then \\[\\frac{m_2}{M_1}\\|x\\|_1\\le\\|x\\|_2\\le\\frac{M_2}{m_1}\\|x\\|_1.\\]</p>",
      "intuition": "<p>Compare both norms with the same coordinate norm, then combine opposite bounds. The constants must be uniform over all vectors; dependence on dimension is allowed.</p>",
      "example": "<p>In \\(\\mathbb R^2\\), the diamond, disk and square unit balls produce the same convergent sequences. In infinite dimensions, the growing-block vectors show that different norms may no longer control one another.</p>",
      "correction": "The final comparison chain printed on archived PDF p33 uses inconsistent constants. The valid comparison is m2/M1 times norm1 ≤ norm2 ≤ M2/m1 times norm1, as displayed here.",
      "lectures": [
        {
          "date": "2026-10-02",
          "heading": "All finite-dimensional norms are equivalent",
          "title": "RFA - 2026-10-02 - Class Notes"
        },
        {
          "date": "2026-10-06",
          "heading": "Finite-dimensional normed spaces are complete",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Choose one basis and its coordinate norm \\(\\|\\cdot\\|_{\\mathrm{coord}}\\). Apply the independently proved coordinate estimate to each norm, obtaining positive constants \\(m_j,M_j\\).</li><li>From \\(\\|x\\|_1\\le M_1\\|x\\|_{\\mathrm{coord}}\\) and \\(m_2\\|x\\|_{\\mathrm{coord}}\\le\\|x\\|_2\\), deduce \\((m_2/M_1)\\|x\\|_1\\le\\|x\\|_2\\).</li><li>From \\(m_1\\|x\\|_{\\mathrm{coord}}\\le\\|x\\|_1\\) and \\(\\|x\\|_2\\le M_2\\|x\\|_{\\mathrm{coord}}\\), obtain the reverse upper bound \\(\\|x\\|_2\\le(M_2/m_1)\\|x\\|_1\\). These two uniform inequalities are exactly norm equivalence; completeness is not an input.</li></ol>",
      "oralQuestions": [
        "1.LF.5"
      ]
    },
    {
      "id": "sequence-spaces-topic",
      "title": "Sequence spaces",
      "type": "topic",
      "section": "1.8",
      "reference": "Section 1.8",
      "page": 33,
      "precise": "<p>The spaces \\(\\ell^p\\), \\(1\\le p\\le\\infty\\), consist of real sequences with finite p-sum norm or finite supremum norm. Young leads to Hölder; Hölder leads to Minkowski; a coordinate-limit argument proves completeness.</p>",
      "intuition": "<p>These are concrete infinite-dimensional laboratories. They preserve familiar vector operations while revealing why norm choice and compactness become subtler than in \\(\\mathbb R^n\\).</p>",
      "example": "<p>The harmonic sequence \\((1/k)\\) lies in \\(\\ell^2\\) and \\(\\ell^\\infty\\), but not in \\(\\ell^1\\). Its finite truncations converge in \\(\\ell^2\\), illustrating dependence on the chosen norm.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Sequence spaces",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "lp-space",
      "title": "The space ℓᵖ",
      "type": "definition",
      "section": "1.8",
      "reference": "Definition 1.79",
      "page": 33,
      "precise": "<p>For \\(1\\le p&lt;\\infty\\), \\[\\ell^p=\\left\\{x=(x_k):\\sum_{k=1}^{\\infty}|x_k|^p&lt;\\infty\\right\\},\\qquad\\|x\\|_p=\\left(\\sum_{k=1}^{\\infty}|x_k|^p\\right)^{1/p}.\\] Operations are coordinatewise; here the chapter uses real sequences.</p>",
      "intuition": "<p>This is the infinite-coordinate analogue of a finite-dimensional p-norm. The summability condition ensures that total size remains finite even though there are infinitely many coordinates.</p>",
      "example": "<p>The sequence \\(x_k=1/k\\) belongs to \\(\\ell^p\\) exactly when \\(p&gt;1\\). Standard unit vectors \\(e^{(k)}\\) belong to every \\(\\ell^p\\) and give arbitrarily large finite linearly independent families.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "The spaces $\\ell^p$",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.19"
      ]
    },
    {
      "id": "linfinity-space",
      "title": "The space ℓ∞",
      "type": "definition",
      "section": "1.8",
      "reference": "Definition 1.79",
      "page": 33,
      "precise": "<p>The space \\(\\ell^\\infty\\) is the set of bounded real sequences, with \\[\\|x\\|_\\infty=\\sup_{k\\ge1}|x_k|.\\] The supremum need not be achieved by a coordinate.</p>",
      "intuition": "<p>This norm measures the worst coordinate error. Convergence in \\(\\ell^\\infty\\) requires one error bound valid simultaneously across all coordinates, rather than separate convergence at each fixed coordinate.</p>",
      "example": "<p>The constant sequence \\((1,1,\\ldots)\\) has norm one and lies in \\(\\ell^\\infty\\), but in no finite-p space. The basis vectors \\(e^{(n)}\\) converge coordinatewise to zero while their supremum norms stay one.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "The spaces $\\ell^p$",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": [
        "1.19"
      ]
    },
    {
      "id": "conjugate-exponents",
      "title": "Conjugate exponents",
      "type": "definition",
      "section": "1.8",
      "reference": "Unnumbered definition after Definition 1.79",
      "page": 33,
      "precise": "<p>For \\(p\\in[1,\\infty]\\), its conjugate exponent \\(p'\\) satisfies \\(1/p+1/p'=1\\), with \\(1/\\infty=0\\). For \\(1&lt;p&lt;\\infty\\), \\(p'=p/(p-1)\\); the endpoint pairs are \\((1,\\infty)\\) and \\((\\infty,1)\\).</p>",
      "intuition": "<p>Conjugate exponents balance two factors in Young and Hölder inequalities. The identity \\((p-1)p'=p\\) is exactly what makes the proof of Minkowski match the needed powers.</p>",
      "example": "<p>The conjugate of \\(3\\) is \\(3/2\\), since \\(1/3+2/3=1\\). The only self-conjugate exponent is \\(2\\), which makes Hölder reduce to the Cauchy–Schwarz inequality.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Conjugate exponents",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "young",
      "title": "Young’s inequality",
      "type": "theorem",
      "section": "1.8",
      "reference": "Exercise 1.80; theorem in current lecture",
      "page": 34,
      "precise": "<p>For \\(a,b\\ge0\\) and conjugate exponents \\(1&lt;p,p'&lt;\\infty\\), \\[ab\\le\\frac{a^p}{p}+\\frac{b^{p'}}{p'}.\\] Equality holds exactly when \\(a^p=b^{p'}\\).</p>",
      "intuition": "<p>A product is controlled by a sum of powers of its individual factors. Minimizing \\(a^p/p+b^{p'}/p'-ab\\) in \\(a\\) shows that its smallest possible value is zero.</p>",
      "example": "<p>For \\(p=p'=2\\), Young becomes \\(ab\\le(a^2+b^2)/2\\), equivalent to \\((a-b)^2\\ge0\\). With \\(a=2,b=3\\), it reads \\(6\\le6.5\\).</p>",
      "correction": "The archived exercise includes p=1 in the power-form statement, where p′=∞ makes that displayed formula unsuitable. The current 6 October notes correctly restrict it to 1<p<∞.",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Young's inequality",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Write \\(q=p'\\). If \\(b=0\\), the inequality is immediate and equality requires \\(a=0\\). For \\(b&gt;0\\), consider \\(F(a)=a^p/p+b^q/q-ab\\) on \\(a\\ge0\\).</li><li>Its derivative is \\(F'(a)=a^{p-1}-b\\), negative below \\(a_*=b^{1/(p-1)}\\) and positive above. Thus \\(a_*\\) is its unique minimum.</li><li>At that point, \\(a_*^p=a_*b=b^q\\), so \\(F(a_*)=b^q(1/p+1/q-1)=0\\). Hence \\(F(a)\\ge0\\), with equality precisely when \\(a^p=b^q\\), including the zero case.</li></ol>",
      "oralQuestions": [
        "1.20"
      ]
    },
    {
      "id": "holder",
      "title": "Discrete Hölder inequality",
      "type": "theorem",
      "section": "1.8",
      "reference": "Exercise 1.81; theorem and endpoint exercise in current lecture",
      "page": 35,
      "precise": "<p>For conjugate \\(p,p'\\in[1,\\infty]\\), \\(x\\in\\ell^p\\) and \\(y\\in\\ell^{p'}\\), \\[\\sum_{k=1}^{\\infty}|x_ky_k|\\le\\|x\\|_p\\|y\\|_{p'}.\\] In particular, the product series is absolutely summable.</p>",
      "intuition": "<p>For interior exponents, normalize both sequences to norm one and sum Young’s inequality; zero-norm cases are immediate. For \\((1,\\infty)\\), simply bound every \\(|y_k|\\) by \\(\\|y\\|_\\infty\\).</p>",
      "example": "<p>With \\(p=2\\), \\(x=(1,2,0,\\ldots)\\), and \\(y=(2,1,0,\\ldots)\\), Hölder gives \\(4\\le\\sqrt5\\sqrt5=5\\). For \\(p=1\\), it bounds weighted sums against any bounded sequence.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Discrete Hölder inequality",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>If either norm is zero, every product is zero. Otherwise, for \\(1&lt;p&lt;\\infty\\), normalize \\(u_k=|x_k|/\\|x\\|_p\\) and \\(v_k=|y_k|/\\|y\\|_{p'}\\).</li><li>Young’s inequality gives \\(u_kv_k\\le u_k^p/p+v_k^{p'}/p'\\). Sum first over \\(k\\le N\\); the right-hand side is at most \\(1/p+1/p'=1\\).</li><li>The partial sums of nonnegative products increase and are bounded by one, so their infinite sum exists with that bound. Multiply back by the norms. At the endpoint, \\(\\sum|x_ky_k|\\le\\|y\\|_\\infty\\sum|x_k|\\); interchange x and y for the other endpoint.</li></ol>",
      "oralQuestions": [
        "1.21"
      ]
    },
    {
      "id": "minkowski",
      "title": "Discrete Minkowski inequality",
      "type": "theorem",
      "section": "1.8",
      "reference": "Exercise 1.82; theorem in current lecture",
      "page": 35,
      "precise": "<p>For \\(1\\le p\\le\\infty\\) and \\(x,y\\in\\ell^p\\), the sum \\(x+y\\) belongs to \\(\\ell^p\\) and \\[\\|x+y\\|_p\\le\\|x\\|_p+\\|y\\|_p.\\]</p>",
      "intuition": "<p>This is the triangle inequality needed to make \\(\\ell^p\\) a normed space. For \\(1&lt;p&lt;\\infty\\), apply Hölder to finite truncations first, avoiding any assumption that the full sum already has finite norm. The endpoints follow directly.</p>",
      "example": "<p>For \\(x=(1,0,\\ldots)\\) and \\(y=(0,1,0,\\ldots)\\), \\(\\|x+y\\|_p=2^{1/p}\\le2\\). At \\(p=\\infty\\), the norm of their sum is one.</p>",
      "correction": "The current lecture explicitly flags the circularity of applying the infinite-sum proof before knowing x+y belongs to ℓp. Finite truncations repair it; p=1 and p=∞ are treated directly.",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Discrete Minkowski inequality",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>For \\(1&lt;p&lt;\\infty\\), work with only the first N coordinates and set \\(S_N=(\\sum_{k\\le N}|x_k+y_k|^p)^{1/p}\\). All sums are finite.</li><li>Use \\(|x_k+y_k|^p\\le(|x_k|+|y_k|)|x_k+y_k|^{p-1}\\) and finite Hölder. Since \\((p-1)p'=p\\), obtain \\(S_N^p\\le(\\|x\\|_p+\\|y\\|_p)S_N^{p-1}\\). If \\(S_N&gt;0\\), divide; otherwise the bound is automatic.</li><li>Let \\(N\\to\\infty\\). The uniformly bounded increasing sums prove both \\(x+y\\in\\ell^p\\) and the claimed inequality. For \\(p=1\\), sum the scalar triangle inequality; for \\(p=\\infty\\), take its supremum.</li></ol>",
      "proofNote": "Finite truncation avoids assuming in advance that x+y belongs to ℓᵖ, which would make the infinite-sum argument circular.",
      "oralQuestions": [
        "1.22"
      ]
    },
    {
      "id": "lp-completeness",
      "title": "Completeness of ℓᵖ",
      "type": "proposition",
      "section": "1.8",
      "reference": "Exercise 1.83; exercise in current lecture",
      "page": 35,
      "precise": "<p>For every \\(p\\in[1,\\infty]\\), the normed space \\(\\ell^p\\) is complete, hence Banach. Every norm-Cauchy sequence \\(x^{(n)}\\) converges in norm to some \\(x\\in\\ell^p\\).</p>",
      "intuition": "<p>First take limits coordinate by coordinate. For finite \\(p\\), pass to these limits in finite partial sums, then increase the number of coordinates; for \\(p=\\infty\\), retain a uniform bound over all coordinates. The Cauchy estimate controls both membership and norm convergence.</p>",
      "example": "<p>The truncations \\(x^{(n)}=(1,1/2,\\ldots,1/n,0,\\ldots)\\) converge to \\((1/k)\\) in \\(\\ell^2\\), since their squared error is \\(\\sum_{k&gt;n}1/k^2\\to0\\). They are not Cauchy in \\(\\ell^1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Completeness of $\\ell^p$",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "secondary-archive-concordance",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "chapter": "1",
      "coverage": "current",
      "proofSketch": "<ol><li>Let \\(x^{(n)}\\) be norm-Cauchy. Since \\(|x_k^{(n)}-x_k^{(m)}|\\le\\|x^{(n)}-x^{(m)}\\|_p\\), each coordinate has a scalar limit \\(x_k\\).</li><li>For finite p and \\(n,m\\ge N\\), the Cauchy estimate implies \\(\\sum_{k=1}^J|x_k^{(n)}-x_k^{(m)}|^p\\le\\varepsilon^p\\) for every finite J. First let \\(m\\to\\infty\\), then \\(J\\to\\infty\\), obtaining \\(\\|x^{(n)}-x\\|_p\\le\\varepsilon\\).</li><li>Taking one such n shows \\(x-x^{(n)}\\in\\ell^p\\); hence \\(x\\in\\ell^p\\) by Minkowski. For \\(p=\\infty\\), pass to each coordinate limit in the uniform bound, then take the supremum. The same argument proves membership and norm convergence.</li></ol>",
      "oralQuestions": [
        "1.LF.6"
      ]
    },
    {
      "id": "ch2-limits-topic",
      "title": "Limits of functions",
      "type": "topic",
      "section": "2.1",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>A sequence of functions can converge separately at each input or uniformly over the whole domain. Uniform convergence means \\(\\sup_x|f_n(x)-f(x)|\\to0\\), and is strong enough to preserve continuity.</p>",
      "intuition": "<p>The order of the quantifiers matters. Pointwise convergence allows a different waiting time at every point; uniform convergence gives one waiting time for the entire graph.</p>",
      "example": "<p>On \\([0,1]\\), \\(x^n\\) converges at every point but leaves a height-one boundary layer near \\(1\\). By contrast, \\(x/n\\to0\\) uniformly, with error \\(1/n\\).</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Spaces of continuous functions",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-pointwise",
      "title": "Pointwise convergence",
      "type": "definition",
      "section": "2.1",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Functions \\(f_n:X\\to\\mathbb R\\) converge pointwise to \\(f\\) if, for every \\(x\\in X\\) and \\(\\varepsilon>0\\), there is \\(N=N(x,\\varepsilon)\\) such that \\(n\\ge N\\Rightarrow|f_n(x)-f(x)|<\\varepsilon\\).</p>",
      "intuition": "<p>Fix an input first, then watch the numerical sequence of outputs. No common rate across different inputs is required, so steep layers and moving peaks may survive.</p>",
      "example": "<p>For \\(f_n(x)=x^n\\) on \\([0,1]\\), the pointwise limit is \\(0\\) for \\(x<1\\) and \\(1\\) at \\(x=1\\). Every \\(f_n\\) is continuous, but the limit is not.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Spaces of continuous functions",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.1"
      ]
    },
    {
      "id": "ch2-uniform-norm",
      "title": "Supremum norm",
      "type": "definition",
      "section": "2.1",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For a bounded real-valued function on a nonempty set \\(X\\), define \\(\\|f\\|_\\infty=\\sup_{x\\in X}|f(x)|\\). This is a norm on any linear space of bounded functions, and \\(\\|f-g\\|_\\infty\\) measures their greatest vertical separation.</p>",
      "intuition": "<p>It measures the worst error, including arbitrarily narrow peaks. A supremum need not be attained; boundedness, rather than existence of a maximizer, makes the norm finite.</p>",
      "example": "<p>For \\(f(x)=\\arctan x\\) on \\(\\mathbb R\\), \\(\\|f\\|_\\infty=\\pi/2\\), although no finite \\(x\\) attains either extreme. The function \\(x\\mapsto x\\) is unbounded and has no finite supremum norm.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Spaces of continuous functions",
          "title": "RFA - 2026-10-06 - Class Notes"
        },
        {
          "date": "2026-10-07",
          "heading": "Basic examples",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.2"
      ]
    },
    {
      "id": "ch2-uniform-convergence",
      "title": "Uniform convergence",
      "type": "definition",
      "section": "2.1",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Functions \\(f_n:X\\to\\mathbb R\\) converge uniformly to \\(f\\) if, for every \\(\\varepsilon>0\\), there is \\(N=N(\\varepsilon)\\) such that \\(|f_n(x)-f(x)|<\\varepsilon\\) for all \\(n\\ge N\\) and all \\(x\\in X\\). Equivalently, \\(\\sup_x|f_n(x)-f(x)|\\to0\\).</p>",
      "intuition": "<p>Eventually the entire graph fits inside one horizontal error tube around the limit. Unlike uniform continuity, this compares different functions at the same input.</p>",
      "example": "<p>On \\([-1,1]\\), \\(f_n(x)=nx/(1+n^2x^2)\\to0\\) pointwise, but \\(|f_n(1/n)|=1/2\\). A moving point detects a persistent error, so the convergence is not uniform.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Spaces of continuous functions",
          "title": "RFA - 2026-10-06 - Class Notes"
        },
        {
          "date": "2026-10-13",
          "heading": "Problem 1",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.1"
      ]
    },
    {
      "id": "ch2-uniform-implies-pointwise",
      "title": "Uniform implies pointwise convergence",
      "type": "proposition",
      "section": "2.1",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>If \\(f_n\\to f\\) uniformly on \\(X\\), then \\(f_n(x)\\to f(x)\\) for every \\(x\\in X\\), because \\(|f_n(x)-f(x)|\\le\\sup_{y\\in X}|f_n(y)-f(y)|\\). The converse is false.</p>",
      "intuition": "<p>A bound valid at every point is automatically valid at any chosen point. The implication cannot be reversed because a pointwise waiting time may grow without bound as the point changes.</p>",
      "example": "<p>For \\(f_n(x)=x^n\\) on \\([0,1]\\), the pointwise limit is \\(\\mathbf1_{\\{1\\}}\\), while \\(\\sup_{x\\in[0,1]}|f_n(x)-f(x)|=1\\) for every \\(n\\).</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Spaces of continuous functions",
          "title": "RFA - 2026-10-06 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>Fix any \\(x\\in X\\). Uniform convergence makes \\(\\sup_{y\\in X}|f_n(y)-f(y)|\\) smaller than any chosen \\(\\varepsilon&gt;0\\) once n is sufficiently large.</li><li>The particular error \\(|f_n(x)-f(x)|\\) is bounded by that supremum. Thus it also tends to zero, proving pointwise convergence at every x.</li><li>To disprove the converse, use \\(f_n(x)=x^n\\) on \\([0,1]\\). Its pointwise limit is zero below one and one at one, but the error has supremum one for every n because \\(x^n\\) approaches one as \\(x\\uparrow1\\) from below.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-uniform-limit-continuous",
      "title": "Uniform limits preserve continuity",
      "type": "theorem",
      "section": "2.1",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Let \\(X\\) be a metric space. If \\(f_n:X\\to\\mathbb R\\) are continuous and \\(f_n\\to f\\) uniformly, then \\(f\\) is continuous. At a fixed \\(x\\), use \\(|f(x)-f(y)|\\le|f-f_n|(x)+|f_n(x)-f_n(y)|+|f_n-f|(y)\\).</p>",
      "intuition": "<p>Choose one approximant close to the limit everywhere. Its continuity controls the middle term, while uniform convergence controls the two outer terms. Each receives one third of the error budget.</p>",
      "example": "<p>The pointwise limit of \\(\\arctan(nx)\\) on \\([-1,1]\\) equals \\(-\\pi/2\\), \\(0\\), or \\(\\pi/2\\) according to the sign of \\(x\\). Its jump at zero proves that convergence cannot be uniform.</p>",
      "lectures": [
        {
          "date": "2026-10-06",
          "heading": "Spaces of continuous functions",
          "title": "RFA - 2026-10-06 - Class Notes"
        },
        {
          "date": "2026-10-13",
          "heading": "Problem 2",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>Fix \\(x\\in X\\) and \\(\\varepsilon&gt;0\\). Choose one index N with \\(\\|f_N-f\\|_\\infty&lt;\\varepsilon/3\\). N is now fixed and works at every point.</li><li>Continuity of \\(f_N\\) at x supplies \\(\\delta&gt;0\\) such that \\(d(x,y)&lt;\\delta\\) implies \\(|f_N(x)-f_N(y)|&lt;\\varepsilon/3\\).</li><li>Insert this approximant: \\(|f(x)-f(y)|\\le|f(x)-f_N(x)|+|f_N(x)-f_N(y)|+|f_N(y)-f(y)|&lt;\\varepsilon\\). Hence f is continuous at x. The index cannot depend on y, which is why uniform rather than merely pointwise convergence is needed.</li></ol>",
      "oralQuestions": [
        "2.3"
      ]
    },
    {
      "id": "ch2-limit-integral",
      "title": "Uniform limits pass through integrals",
      "type": "proposition",
      "section": "2.1",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>If continuous \\(f_n:[a,b]\\to\\mathbb R\\) converge uniformly to \\(f\\), then \\(\\int_a^b f_n\\to\\int_a^b f\\), since \\(\\left|\\int_a^b(f_n-f)\\right|\\le(b-a)\\|f_n-f\\|_\\infty\\to0\\).</p>",
      "intuition": "<p>The total area error cannot exceed interval length times the largest height error. Uniform convergence provides exactly the global estimate needed for this elementary interchange.</p>",
      "example": "<p>For \\(f_n(x)=x+\\sin(nx)/n\\) on \\([0,1]\\), the uniform error is at most \\(1/n\\). Thus the integrals converge to \\(\\int_0^1x\\,dx=1/2\\), without evaluating the oscillatory integral.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Why boundedness alone is insufficient",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "lectureStatus": "exercise",
      "coverage": "current",
      "proofSketch": "<ol><li>The uniform-limit theorem makes f continuous, so all functions involved are Riemann integrable on the compact interval.</li><li>Linearity and the integral triangle inequality give \\(\\left|\\int_a^b f_n-\\int_a^b f\\right|\\le\\int_a^b|f_n-f|\\). At every input, the integrand is bounded by the same number \\(\\|f_n-f\\|_\\infty\\).</li><li>Therefore the integral error is at most \\((b-a)\\|f_n-f\\|_\\infty\\), which tends to zero. If \\(a=b\\), both integrals are zero. The finite interval length is the ingredient turning a uniform height error into a vanishing area error.</li></ol>",
      "oralQuestions": [
        "2.6"
      ]
    },
    {
      "id": "ch2-spaces-topic",
      "title": "Continuous function spaces",
      "type": "topic",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Functions become vectors under pointwise operations. The supremum norm turns \\(C(K)\\), for compact \\(K\\), and \\(C_b(X)\\), for arbitrary metric \\(X\\), into Banach spaces. Compact support imposes a stronger condition than merely vanishing at infinity.</p>",
      "intuition": "<p>Choosing the allowed functions is as important as choosing the norm. A uniform limit may leave a class with compact support, even though it remains bounded and continuous.</p>",
      "example": "<p>On \\(\\mathbb R\\), a triangular bump lies in \\(C_c\\), the Gaussian \\(e^{-x^2}\\) lies in \\(C_0\\setminus C_c\\), and the constant \\(1\\) lies in \\(C_b\\setminus C_0\\).</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Continuous functions and the uniform norm",
          "title": "RFA - 2026-10-07 - Class Notes"
        },
        {
          "date": "2026-10-07",
          "heading": "Support and compact support",
          "title": "RFA - 2026-10-07 - Class Notes"
        },
        {
          "date": "2026-10-07",
          "heading": "Vanishing at infinity",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-continuous-space",
      "title": "The space C(X)",
      "type": "definition",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For a metric space \\(X\\), let \\(C(X)=\\{f:X\\to\\mathbb R:f\\text{ is continuous}\\}\\), with pointwise addition and scalar multiplication. If \\(K\\) is compact, the extreme-value theorem makes every \\(f\\in C(K)\\) bounded, so \\(\\|\\cdot\\|_\\infty\\) is a finite norm on \\(C(K)\\).</p>",
      "intuition": "<p>A whole function is one vector. Compactness of the domain ensures its continuous graph cannot escape to infinite height, so the worst-case norm is always meaningful.</p>",
      "example": "<p>If \\(K=\\{x_1,\\ldots,x_m\\}\\) has the discrete metric, \\(f\\mapsto(f(x_1),\\ldots,f(x_m))\\) identifies \\(C(K)\\) with \\(\\mathbb R^m\\) carrying the maximum norm.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Continuous functions and the uniform norm",
          "title": "RFA - 2026-10-07 - Class Notes"
        },
        {
          "date": "2026-10-07",
          "heading": "Basic examples",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "correction": "The current transcription corrects the handwritten attribution: boundedness and attainment use the extreme-value theorem, rather than the Heine–Borel characterization.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-bounded-continuous",
      "title": "Bounded continuous functions C_b(X)",
      "type": "definition",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For a metric space \\(X\\), \\(C_b(X)=\\{f\\in C(X):\\sup_{x\\in X}|f(x)|<\\infty\\}\\), with the supremum norm. When \\(X=K\\) is compact, \\(C_b(K)=C(K)\\); this equality can fail for noncompact domains.</p>",
      "intuition": "<p>On an unbounded or noncompact domain, continuity alone does not control height. The subscript b explicitly restricts attention to functions with a global bound.</p>",
      "example": "<p>Both \\(\\sin x\\) and \\(\\arctan x\\) belong to \\(C_b(\\mathbb R)\\). The continuous function \\(x\\mapsto x\\) does not.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Basic examples",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.5"
      ]
    },
    {
      "id": "ch2-ck-banach",
      "title": "Completeness of C(K)",
      "type": "theorem",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For a compact metric space \\(K\\), \\((C(K),\\|\\cdot\\|_\\infty)\\) is Banach. If \\((f_n)\\) is uniformly Cauchy, define \\(f(x)=\\lim_n f_n(x)\\). Passing to the pointwise limit in \\(|f_n(x)-f_m(x)|\\le\\varepsilon\\) gives \\(\\|f_n-f\\|_\\infty\\le\\varepsilon\\); the uniform limit is continuous.</p>",
      "intuition": "<p>First use completeness of the real numbers at each input. Then reuse the same Cauchy index for every input to upgrade all these scalar limits into one uniform function-space limit.</p>",
      "example": "<p>The partial sums \\(s_N(x)=\\sum_{k=1}^N x^k/2^k\\) are uniformly Cauchy on \\([0,1]\\), with tail bounded by \\(2^{-N}\\). They converge in \\(C([0,1])\\) to \\(x/(2-x)\\).</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Continuous functions and the uniform norm",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>Let \\((f_n)\\) be Cauchy in the uniform norm. For fixed x, \\(|f_n(x)-f_m(x)|\\le\\|f_n-f_m\\|_\\infty\\), so completeness of \\(\\mathbb R\\) defines \\(f(x)=\\lim_n f_n(x)\\).</li><li>Given \\(\\varepsilon&gt;0\\), choose N making the uniform Cauchy error below \\(\\varepsilon/2\\) for \\(m,n\\ge N\\). Fix n and x and let \\(m\\to\\infty\\): \\(|f_n(x)-f(x)|\\le\\varepsilon/2\\). This bound holds for every x, hence \\(f_n\\to f\\) uniformly.</li><li>The uniform limit is continuous. Compactness of K makes it bounded, so \\(f\\in C(K)\\) and convergence occurs in the stated norm.</li></ol>",
      "oralQuestions": [
        "2.4"
      ]
    },
    {
      "id": "ch2-cb-banach",
      "title": "Completeness of C_b(X)",
      "type": "theorem",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For every metric space \\(X\\), \\((C_b(X),\\|\\cdot\\|_\\infty)\\) is Banach. A uniformly Cauchy sequence has a uniform pointwise-defined limit \\(f\\); continuity follows from the uniform-limit theorem, and \\(\\|f\\|_\\infty\\le\\|f-f_N\\|_\\infty+\\|f_N\\|_\\infty<\\infty\\).</p>",
      "intuition": "<p>Compactness was needed to ensure that all continuous functions are bounded. Once boundedness is included in the definition of the space, the same completeness argument works on any metric domain.</p>",
      "example": "<p>The functions \\(f_n(x)=\\arctan x+\\sin(nx)/n\\) on \\(\\mathbb R\\) converge uniformly to \\(\\arctan x\\), because the error is at most \\(1/n\\). The limit remains in \\(C_b(\\mathbb R)\\).</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Basic examples",
          "title": "RFA - 2026-10-07 - Class Notes"
        },
        {
          "date": "2026-10-07",
          "heading": "Support and compact support",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>A uniformly Cauchy sequence \\((f_n)\\subseteq C_b(X)\\) has scalar limits \\(f(x)\\) at every point. Passing to the scalar limit in a Cauchy estimate independent of x proves \\(\\|f_n-f\\|_\\infty\\to0\\).</li><li>The uniform-limit theorem gives continuity of f on X. To verify boundedness, choose N with \\(\\|f-f_N\\|_\\infty\\le1\\). Then \\(|f(x)|\\le1+\\|f_N\\|_\\infty\\) for every x.</li><li>Thus f lies in \\(C_b(X)\\), completing the proof. No compactness of the domain is used: the bounded approximant and uniform error together supply the global bound that continuity alone would not provide.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-support",
      "title": "Support of a function",
      "type": "definition",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For \\(f:X\\to\\mathbb R\\), its support is \\(\\operatorname{supp}f=\\overline{\\{x\\in X:f(x)\\ne0\\}}\\), with closure taken in \\(X\\). Thus the support is closed and includes boundary points of the nonzero region.</p>",
      "intuition": "<p>Support records where a function can be active, including points approached by nonzero values. Taking only the nonzero set would omit its boundary.</p>",
      "example": "<p>The tent function \\(f(x)=\\max(1-|x|,0)\\) is nonzero on \\((-1,1)\\), but its support is \\([-1,1]\\). The endpoints belong to the support even though \\(f\\) vanishes there.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Support and compact support",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.5"
      ]
    },
    {
      "id": "ch2-compact-support",
      "title": "Compactly supported functions C_c(X)",
      "type": "definition",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>\\(C_c(X)=\\{f\\in C(X):\\operatorname{supp}f\\text{ is compact}\\}\\). It is a linear subspace of \\(C_b(X)\\): \\(\\operatorname{supp}(f+g)\\subseteq\\operatorname{supp}f\\cup\\operatorname{supp}g\\), and continuous functions are bounded on compact support.</p>",
      "intuition": "<p>A compactly supported function becomes exactly zero outside a bounded region when \\(X=\\mathbb R^d\\). This lets one localize computations while retaining continuity.</p>",
      "example": "<p>\\(f(x)=\\max(1-|x|,0)\\) lies in \\(C_c(\\mathbb R)\\). The Gaussian \\(e^{-x^2}\\) does not: it is positive everywhere, so its support is all of \\(\\mathbb R\\).</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Support and compact support",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.5"
      ]
    },
    {
      "id": "ch2-cc-incomplete",
      "title": "C_c(R) is not uniformly complete",
      "type": "proposition",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>\\(C_c(\\mathbb R)\\) is not closed in \\(C_b(\\mathbb R)\\), hence is not complete in the supremum norm. Let \\(\\chi_n\\) equal \\(1\\) on \\([-n,n]\\), taper linearly to \\(0\\) on the adjacent unit intervals, and vanish beyond them. Then \\(f_n=\\chi_n e^{-x^2}\\in C_c(\\mathbb R)\\), but \\(\\|f_n-e^{-x^2}\\|_\\infty\\le e^{-n^2}\\to0\\).</p>",
      "intuition": "<p>The supports may grow with the index. Uniform approximation controls heights, but does not force all approximants to vanish outside one fixed compact set.</p>",
      "example": "<p>Each truncated Gaussian has compact support \\([-n-1,n+1]\\), while its uniform limit is positive at every real number. By contrast, if \\(K\\) is compact, then \\(C_c(K)=C(K)\\) is complete.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Support and compact support",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>Let \\(g(x)=e^{-x^2}\\), and choose continuous cutoffs \\(0\\le\\chi_n\\le1\\) equal to one on \\([-n,n]\\) and zero outside \\([-n-1,n+1]\\). Then \\(g_n=\\chi_ng\\) is continuous and compactly supported.</li><li>The approximation error is zero on \\([-n,n]\\). Outside it, \\(|g_n-g|=|1-\\chi_n|e^{-x^2}\\le e^{-n^2}\\). Hence \\(g_n\\to g\\) uniformly and the sequence is uniformly Cauchy.</li><li>But g is positive everywhere, so its support is \\(\\mathbb R\\), which is not compact. Any uniform limit of \\(g_n\\) must equal g by uniqueness. Thus this Cauchy sequence has no limit in \\(C_c(\\mathbb R)\\).</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-c0",
      "title": "Vanishing at infinity: C_0(X)",
      "type": "definition",
      "section": "2.2",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>In the lecture convention, \\(C_0(X)=\\overline{C_c(X)}^{\\|\\cdot\\|_\\infty}\\), where closure is taken in \\(C_b(X)\\). Thus \\(C_c(X)\\subseteq C_0(X)\\subseteq C_b(X)\\). It is a closed linear subspace of the Banach space \\(C_b(X)\\), and is therefore Banach.</p>",
      "intuition": "<p>Completing compactly supported functions allows tails that are not exactly zero but can be made uniformly negligible outside a compact region.</p>",
      "example": "<p>On \\(\\mathbb R\\), \\(e^{-x^2}\\in C_0\\setminus C_c\\). The constant function \\(1\\) is at distance at least \\(1\\) from every compactly supported function, so it belongs to \\(C_b\\setminus C_0\\).</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Vanishing at infinity",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.5"
      ]
    },
    {
      "id": "ch2-compactness-topic",
      "title": "Approximation & compactness in C(K)",
      "type": "topic",
      "section": "2.3",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Weierstrass gives dense polynomial approximants in \\(C([a,b])\\). Arzelà–Ascoli characterizes compact subsets of \\(C(K)\\) by closedness, a common uniform bound, and equicontinuity, for compact metric \\(K\\).</p>",
      "intuition": "<p>Density asks whether individual targets can be approximated. Compactness asks whether every sequence in an entire family has a convergent subsequence. They solve different problems.</p>",
      "example": "<p>Polynomials approximate \\(|x|\\) uniformly on \\([-1,1]\\), while the whole unit ball of \\(C([0,1])\\) is not compact: the sequence \\(x^n\\) has no uniformly convergent subsequence.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Approximation in $C(K)$",
          "title": "RFA - 2026-10-07 - Class Notes"
        },
        {
          "date": "2026-10-07",
          "heading": "Equicontinuity",
          "title": "RFA - 2026-10-07 - Class Notes"
        },
        {
          "date": "2026-10-27",
          "heading": "True/False 4: the closed unit ball in $C([0,1])$",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-weierstrass",
      "title": "Weierstrass approximation theorem",
      "type": "theorem",
      "section": "2.3",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For a compact interval \\([a,b]\\), polynomials are dense in \\((C([a,b]),\\|\\cdot\\|_\\infty)\\). Precisely, for each continuous \\(f\\) and each \\(\\varepsilon>0\\), there is a polynomial \\(p\\) with \\(\\sup_{x\\in[a,b]}|f(x)-p(x)|<\\varepsilon\\).</p>",
      "intuition": "<p>Even a continuous graph with corners can be approximated everywhere at once by smooth algebraic graphs. Smoothness of the approximants is not automatically inherited by the uniform limit.</p>",
      "example": "<p>There are polynomials \\(p_n\\) converging uniformly to \\(|x|\\) on \\([-1,1]\\), although \\(|x|\\) is not differentiable at zero. This also shows that polynomial functions are not closed in this supremum norm.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Approximation in $C(K)$",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>After an affine change of variable, work on \\([0,1]\\). For continuous g, define the Bernstein polynomial \\(B_ng(x)=\\sum_{k=0}^n g(k/n)w_{n,k}(x)\\), where \\(w_{n,k}(x)=\\binom nkx^k(1-x)^{n-k}\\).</li><li>Binomial identities give nonnegative weights with \\(\\sum_kw_{n,k}=1\\) and \\(\\sum_k(k/n-x)^2w_{n,k}=x(1-x)/n\\le1/(4n)\\).</li><li>Choose \\(\\delta&gt;0\\) by uniform continuity so nearby samples contribute less than \\(\\varepsilon/2\\) to the error. The total weight of samples with \\(|k/n-x|\\ge\\delta\\) is at most \\(1/(4n\\delta^2)\\), so their contribution is at most \\(2\\|g\\|_\\infty/(4n\\delta^2)\\).</li><li>The bound is uniform in x and becomes less than \\(\\varepsilon\\) for large n. Transform back to \\([a,b]\\); a one-point interval is immediate.</li></ol>",
      "proofNote": "AI-authored Bernstein-polynomial proof route. The current transcription states the theorem without recording this proof; the displayed binomial identities are elementary finite-sum calculations, not an appeal to later measure theory.",
      "oralQuestions": []
    },
    {
      "id": "ch2-equicontinuity",
      "title": "Equicontinuous family",
      "type": "definition",
      "section": "2.3",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>A family \\(\\mathcal F\\subseteq C(X)\\) is equicontinuous if for every \\(x\\in X\\) and \\(\\varepsilon>0\\), there is \\(\\delta>0\\) such that \\(d(x,y)<\\delta\\Rightarrow|f(x)-f(y)|<\\varepsilon\\) for every \\(f\\in\\mathcal F\\). The same \\(\\delta\\) works for all functions; it may depend on \\(x\\).</p>",
      "intuition": "<p>Each function is continuous with a shared local tolerance. No member of the family can develop an arbitrarily steep or rapid variation at a fixed point while the others stay controlled.</p>",
      "example": "<p>The family \\(\\sin(nx)\\) on \\([0,\\pi]\\) is not equicontinuous at zero: \\(x_n=\\pi/(2n)\\to0\\), but \\(|\\sin(nx_n)-\\sin(0)|=1\\). A common Lipschitz bound would give equicontinuity.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Equicontinuity",
          "title": "RFA - 2026-10-07 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.LF.1"
      ]
    },
    {
      "id": "ch2-arzela-ascoli",
      "title": "Arzelà–Ascoli theorem",
      "type": "theorem",
      "section": "2.3",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Let \\(K\\) be a compact metric space and \\(A\\subseteq C(K)\\). Then \\(A\\) is compact in the supremum norm if and only if it is closed, bounded in \\(\\|\\cdot\\|_\\infty\\), and equicontinuous.</p>",
      "intuition": "<p>Bounded heights alone do not prevent finer and finer spikes. Equicontinuity supplies common spatial control; compactness of the domain reduces that control to finitely many sample points.</p>",
      "example": "<p>The family \\(A=\\{f\\in C([0,1]):\\|f\\|_\\infty\\le1,\\ |f(x)-f(y)|\\le|x-y|\\}\\) is uniformly bounded, equicontinuous, and closed under uniform limits, so it is compact.</p>",
      "lectures": [
        {
          "date": "2026-10-07",
          "heading": "Equicontinuity",
          "title": "RFA - 2026-10-07 - Class Notes"
        },
        {
          "date": "2026-10-09",
          "heading": "Arzelà–Ascoli: the diagonal proof",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li><strong>Necessity.</strong> Compact A is closed and bounded. For a fixed x and tolerance \\(\\varepsilon\\), take a finite \\(\\varepsilon/3\\)-net \\(g_1,\\ldots,g_m\\) in A for the uniform norm. Continuity of these finitely many functions supplies one neighborhood of x. Comparing any f to a nearby \\(g_i\\) with two uniform errors proves equicontinuity.</li><li><strong>Sufficiency.</strong> Choose a countable dense set in K. Boundedness and repeated Bolzano–Weierstrass extraction give a diagonal subsequence converging at every point of that set.</li><li>Equicontinuity and compactness of K turn convergence at finitely many dense sample points into a uniform Cauchy estimate. Completeness of \\(C(K)\\) gives a uniform limit, and closedness puts it in A. Thus A is sequentially compact, hence compact.</li></ol>",
      "oralQuestions": [
        "2.8",
        "2.LF.1"
      ]
    },
    {
      "id": "ch2-arzela-precompact",
      "title": "Arzelà–Ascoli: precompactness",
      "type": "proposition",
      "section": "2.3",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For compact metric \\(K\\), a bounded equicontinuous family \\(A\\subseteq C(K)\\) is precompact: every sequence has a uniformly convergent subsequence with limit in \\(C(K)\\), and \\(\\overline A\\) is compact. Closedness is needed only to guarantee that each limit stays in \\(A\\).</p>",
      "intuition": "<p>Subsequence extraction and retention of the limit are separate tasks. This is useful for approximating families whose limit may have less regularity than their members.</p>",
      "example": "<p>The constant functions \\(f_c(x)=c\\), with \\(0<c<1\\), form a precompact family. They are not a compact set themselves, because a sequence with \\(c\\downarrow0\\) converges to the excluded zero function.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Arzelà–Ascoli: the diagonal proof",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>Let \\(\\|f\\|_\\infty\\le M\\) for f in A. Uniform limits preserve this bound, so \\(\\overline A\\) is bounded.</li><li>Equicontinuity also passes to the closure. Fix x and \\(\\varepsilon&gt;0\\), and use the equicontinuity radius of A for \\(\\varepsilon/3\\). For any \\(g\\in\\overline A\\), choose \\(f\\in A\\) with \\(\\|g-f\\|_\\infty&lt;\\varepsilon/3\\). The three-term comparison bounds \\(|g(x)-g(y)|\\) by \\(\\varepsilon\\). The radius is independent of g.</li><li>The closure is now closed, bounded and equicontinuous, so Arzelà–Ascoli makes it compact. This proves precompactness; the limiting functions may lie in \\(\\overline A\\setminus A\\).</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-diagonal",
      "title": "Dense-set convergence becomes uniform",
      "type": "proposition",
      "section": "2.3",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Let \\(K\\) be compact metric, \\(D\\subseteq K\\) dense, and \\((f_n)\\subseteq C(K)\\) equicontinuous. If \\(f_n(x)\\) converges for every \\(x\\in D\\), then \\((f_n)\\) is uniformly Cauchy and therefore converges uniformly. For bounded families, a diagonal Bolzano–Weierstrass extraction produces such a subsequence on a countable dense \\(D\\).</p>",
      "intuition": "<p>Equicontinuity transfers closeness from finitely many dense sample points to every point. Compactness makes finitely many samples sufficient; completeness then supplies the limit function.</p>",
      "example": "<p>For small \\(\\varepsilon\\), cover \\(K\\) by finitely many balls centred at \\(z_i\\in D\\). For nearby \\(x,z_i\\), \\(|f_n(x)-f_m(x)|\\) is bounded by two equicontinuity errors plus \\(|f_n(z_i)-f_m(z_i)|\\), giving a uniform \\(3\\varepsilon\\) estimate.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Arzelà–Ascoli: the diagonal proof",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "correction": "The proof uses the uniform-in-x form of equicontinuity available on a compact domain. The original definition permits delta to depend on x; a finite-subcover argument supplies the uniform form.",
      "coverage": "current",
      "proofSketch": "<ol><li>Compactness upgrades equicontinuity to one spatial radius for a chosen tolerance: take finitely many local neighborhoods and compare points through their centres. Then choose a finite sufficiently fine net \\(z_1,\\ldots,z_m\\) with centres in D.</li><li>At these finitely many points, convergence gives one index N such that \\(|f_n(z_i)-f_k(z_i)|&lt;\\varepsilon/3\\) for all \\(n,k\\ge N\\). For arbitrary x choose a nearby \\(z_i\\). Equicontinuity bounds both outer terms in \\(|f_n(x)-f_k(x)|\\le|f_n(x)-f_n(z_i)|+|f_n(z_i)-f_k(z_i)|+|f_k(z_i)-f_k(x)|\\).</li><li>Thus the sequence is uniformly Cauchy and converges in \\(C(K)\\). For a bounded family, successive scalar subsequences at a countable dense set, followed by a diagonal selection, establish the assumed pointwise convergence.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-unit-ball",
      "title": "A closed bounded function-space ball need not be compact",
      "type": "proposition",
      "section": "2.3",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>The closed unit ball \\(A=\\{f\\in C([0,1]):\\|f\\|_\\infty\\le1\\}\\) is not compact. The sequence \\(f_n(x)=x^n\\) lies in \\(A\\), but every subsequence has the discontinuous pointwise limit \\(\\mathbf1_{\\{1\\}}\\), so no subsequence converges uniformly.</p>",
      "intuition": "<p>Infinite-dimensional closed bounded sets can contain arbitrarily fine behavior. Here steepening near the endpoint defeats equicontinuity, precisely the missing Arzelà–Ascoli hypothesis.</p>",
      "example": "<p>For \\(x_n=1-1/n\\), \\(x_n\\to1\\), while \\(|x_n^n-1|\\to1-e^{-1}>0\\). This directly exhibits failure of equicontinuity at \\(1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-27",
          "heading": "True/False 4: the closed unit ball in $C([0,1])$",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>The functions \\(f_n(x)=x^n\\) all have uniform norm one, so lie in the closed unit ball.</li><li>At every \\(x&lt;1\\), \\(x^n\\to0\\), whereas \\(f_n(1)=1\\). Every subsequence, whose indices tend to infinity, has the same pointwise limit \\(g=\\mathbf1_{\\{1\\}}\\).</li><li>If some subsequence converged uniformly, it would converge pointwise to that same g. But a uniform limit of continuous functions is continuous, whereas g jumps at one. Hence there is no uniformly convergent subsequence. Sequential compactness is necessary for compactness in this metric space, so the unit ball is not compact.</li></ol>",
      "oralQuestions": [
        "2.LF.2"
      ]
    },
    {
      "id": "ch2-lipschitz-topic",
      "title": "Lipschitz control",
      "type": "topic",
      "section": "2.4",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>A Lipschitz estimate \\(|f(x)-f(y)|\\le Ld(x,y)\\) controls every secant slope. A common \\(L\\) makes a family equicontinuous; a common height bound and closedness then yield compactness on a compact domain.</p>",
      "intuition": "<p>A shared slope bound prevents narrow spikes. A bound at even one reference point can also control all heights when the domain has finite diameter.</p>",
      "example": "<p>If \\(f(0)=0\\) and \\(f\\) is \\(2\\)-Lipschitz on \\([0,1]\\), then \\(|f(x)|\\le2x\\le2\\). Anchoring the graph turns slope control into height control.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Lipschitz continuity",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-lipschitz",
      "title": "Lipschitz map",
      "type": "definition",
      "section": "2.4",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>A map \\(f:(X,d_X)\\to(Y,d_Y)\\) is Lipschitz if some finite \\(L\\ge0\\) satisfies \\(d_Y(f(x),f(y))\\le Ld_X(x,y)\\) for all \\(x,y\\in X\\).</p>",
      "intuition": "<p>Output distance can grow at most linearly with input distance. This is quantitative continuity: one constant controls all pairs of points.</p>",
      "example": "<p>\\(f(x)=|x|\\) is \\(1\\)-Lipschitz because \\(\\big||x|-|y|\\big|\\le|x-y|\\). Differentiability is not required; the graph may have corners.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Lipschitz continuity",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.7"
      ]
    },
    {
      "id": "ch2-lipschitz-constant",
      "title": "Least Lipschitz constant",
      "type": "definition",
      "section": "2.4",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For a real-valued Lipschitz function, \\(\\operatorname{Lip}(f)=\\inf\\{L\\ge0:|f(x)-f(y)|\\le Ld(x,y)\\ \\forall x,y\\}\\). Equivalently, \\(\\operatorname{Lip}(f)=\\sup_{x\\ne y}|f(x)-f(y)|/d(x,y)\\), with value \\(0\\) for a singleton domain.</p>",
      "intuition": "<p>The largest secant slope is exactly the smallest admissible global slope bound. An unbounded quotient disproves Lipschitz continuity.</p>",
      "example": "<p>On \\([0,1]\\), \\(f(x)=x^2\\) has quotient \\(|x+y|\\), whose supremum is \\(2\\), so \\(\\operatorname{Lip}(f)=2\\). For \\(\\sqrt{x}\\), the quotient against zero is \\(1/\\sqrt{x}\\), which diverges.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Lipschitz continuity",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-lipschitz-uniform",
      "title": "Lipschitz implies uniform continuity",
      "type": "proposition",
      "section": "2.4",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Every Lipschitz map is uniformly continuous. For \\(L>0\\), choose \\(\\delta=\\varepsilon/L\\); if \\(L=0\\), the map is constant. The converse fails, even on a compact interval.</p>",
      "intuition": "<p>Lipschitz continuity gives a linear rule for converting an output tolerance into an input tolerance. Uniform continuity allows a more general, possibly much smaller, tolerance.</p>",
      "example": "<p>The function \\(\\sqrt{x}\\) is uniformly continuous on \\([0,1]\\), for example because \\(|\\sqrt{x}-\\sqrt{y}|\\le\\sqrt{|x-y|}\\), but its slopes near zero are unbounded, so it is not Lipschitz.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Lipschitz continuity",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>If the Lipschitz constant \\(L&gt;0\\), fix \\(\\varepsilon&gt;0\\) and set \\(\\delta=\\varepsilon/L\\). Then \\(d_X(x,y)&lt;\\delta\\) gives \\(d_Y(f(x),f(y))\\le Ld_X(x,y)&lt;\\varepsilon\\). The radius is independent of the points.</li><li>If \\(L=0\\), all image distances vanish, so the map is constant and uniformly continuous.</li><li>The converse fails for \\(f(x)=\\sqrt{x}\\) on \\([0,1]\\). The estimate \\(|\\sqrt{x}-\\sqrt{y}|\\le\\sqrt{|x-y|}\\) gives uniform continuity, but the quotient against zero is \\(1/\\sqrt{x}\\), which has no finite bound.</li></ol>",
      "oralQuestions": [
        "2.7"
      ]
    },
    {
      "id": "ch2-lipschitz-compact",
      "title": "Uniformly bounded Lipschitz families are compact",
      "type": "proposition",
      "section": "2.4",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Let \\(K\\) be compact metric and \\(M,L\\ge0\\). Then \\(A_{M,L}=\\{f\\in C(K):\\|f\\|_\\infty\\le M,\\ \\operatorname{Lip}(f)\\le L\\}\\) is compact in the supremum norm. The common Lipschitz bound gives equicontinuity and survives uniform limits, as does the height bound.</p>",
      "intuition": "<p>There are two independent escape routes: graphs can become too tall or too steep. Bounding both closes them, while the inequalities remain true after taking a uniform limit.</p>",
      "example": "<p>For a fixed \\(x_0\\in K\\), the family \\(\\{f:f(x_0)=0,\\operatorname{Lip}(f)\\le L\\}\\) is compact: \\(\\|f\\|_\\infty\\le L\\operatorname{diam}K\\), and the anchor condition survives uniform limits.</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Lipschitz continuity",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>The height bound M gives boundedness. The common Lipschitz bound gives equicontinuity: choose \\(\\delta=\\varepsilon/L\\) when \\(L&gt;0\\); when \\(L=0\\), every member is constant.</li><li>To prove closedness, let \\(f_n\\) from the family converge uniformly to f. Then \\(|f(x)|=\\lim_n|f_n(x)|\\le M\\), and for every x,y, \\(|f(x)-f(y)|=\\lim_n|f_n(x)-f_n(y)|\\le Ld(x,y)\\).</li><li>The uniform limit is continuous, so it still belongs to the family. Arzelà–Ascoli now yields compactness. An anchor condition \\(f(x_0)=0\\) may replace the height hypothesis, since it implies \\(\\|f\\|_\\infty\\le L\\operatorname{diam}K\\).</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-derivative-precompact",
      "title": "Bounded derivatives give precompactness",
      "type": "proposition",
      "section": "2.4",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>If \\(M,N>0\\), the family \\(\\mathcal F=\\{f\\in C^1([a,b]):\\|f\\|_\\infty\\le M,\\ \\|f^{\\prime}\\|_\\infty\\le N\\}\\) is precompact in \\((C([a,b]),\\|\\cdot\\|_\\infty)\\). The mean-value theorem makes every member \\(N\\)-Lipschitz, and Arzelà–Ascoli then applies.</p>",
      "intuition": "<p>Derivative control is a convenient way to obtain equicontinuity. The resulting limit is continuous and Lipschitz, but need not retain a continuous derivative, so the conclusion is precompactness in C.</p>",
      "example": "<p>On \\([-1,1]\\), \\(f_n(x)=\\sqrt{x^2+1/n}\\) satisfy \\(\\|f_n\\|_\\infty\\le\\sqrt2\\) and \\(\\|f_n^{\\prime}\\|_\\infty\\le1\\). They converge uniformly to \\(|x|\\), which is not \\(C^1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-09",
          "heading": "Lipschitz continuity",
          "title": "RFA - 2026-10-09 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "lectureStatus": "homework",
      "coverage": "current",
      "proofSketch": "<ol><li>For every function in the family, the mean-value theorem gives \\(|f(x)-f(y)|\\le\\|f'\\|_\\infty|x-y|\\le N|x-y|\\). Thus all functions share the same modulus of continuity.</li><li>The separate bound \\(\\|f\\|_\\infty\\le M\\) supplies boundedness. Since the domain is compact, the precompact form of Arzelà–Ascoli gives a uniformly convergent subsequence from every sequence in the family.</li><li>The conclusion concerns convergence in \\(C([a,b])\\). No closedness in that space has been established: a uniform limit can be Lipschitz without being \\(C^1\\). This is why the correct conclusion is precompactness, rather than compactness of the original differentiable family.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-existence-topic",
      "title": "Completeness & existence",
      "type": "topic",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Derivative norms make \\(C^m\\) complete. Arzelà–Ascoli extracts limits of approximate ODE solutions under continuity; Banach’s contraction theorem produces a unique fixed point by a convergent iteration on a complete space.</p>",
      "intuition": "<p>There are two existence mechanisms: compactness selects a convergent subsequence, while contraction forces the full iteration to converge and also yields uniqueness.</p>",
      "example": "<p>Euler polygons with a uniform slope bound fit the compactness method. The iteration \\(x_{n+1}=(x_n+1)/2\\) fits the contraction method and converges geometrically to \\(1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "$C^1$ with two different norms",
          "title": "RFA - 2026-10-13 - Class Notes"
        },
        {
          "date": "2026-10-13",
          "heading": "Arzelà–Ascoli and Peano existence",
          "title": "RFA - 2026-10-13 - Class Notes"
        },
        {
          "date": "2026-10-13",
          "heading": "Banach’s contraction theorem",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-cm-norm",
      "title": "The C^m norm",
      "type": "definition",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For an integer \\(m\\ge0\\), \\(C^m([0,1])\\) consists of functions whose derivatives through order \\(m\\) are continuous, with endpoint derivatives interpreted one-sided. Define \\(\\|f\\|_{C^m}=\\sum_{j=0}^m\\|f^{(j)}\\|_\\infty\\), where \\(f^{(0)}=f\\).</p>",
      "intuition": "<p>The norm simultaneously measures the function and every derivative up to the specified order. Convergence in this norm means uniform convergence at all those levels.</p>",
      "example": "<p>For \\(f_n(x)=\\sin(nx)/n\\), \\(\\|f_n\\|_\\infty\\le1/n\\), but \\(\\|f_n^{\\prime}\\|_\\infty=1\\). Thus \\(f_n\\to0\\) in the supremum norm but not in the \\(C^1\\) norm.</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "$C^1$ with two different norms",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-cm-banach",
      "title": "Completeness of C^m",
      "type": "theorem",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For every finite integer \\(m\\ge0\\), \\((C^m([0,1]),\\|\\cdot\\|_{C^m})\\) is Banach. For \\(m=1\\), a Cauchy sequence satisfies \\(f_n\\to f\\) and \\(f_n^{\\prime}\\to g\\) uniformly. Passing to the limit in \\(f_n(x)=f_n(0)+\\int_0^x f_n^{\\prime}(s)\\,ds\\) gives \\(f^{\\prime}=g\\); repeat for higher derivatives.</p>",
      "intuition": "<p>Uniformly convergent functions and derivatives must remain compatible. The integral identity links them and prevents a candidate derivative limit from becoming detached from the function limit.</p>",
      "example": "<p>The partial sums of \\(\\sum_{k\\ge1}2^{-k}x^k\\) are Cauchy in \\(C^1([0,1])\\), because both \\(\\sum2^{-k}\\) and \\(\\sum k2^{-k}\\) converge. Their limit \\(x/(2-x)\\) has the uniformly obtained derivative.</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "$C^1$ with two different norms",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>Let \\((f_n)\\) be Cauchy in the \\(C^m\\) norm. For each \\(0\\le j\\le m\\), the derivatives \\(f_n^{(j)}\\) are uniformly Cauchy. Completeness of \\(C([0,1])\\) gives uniform limits \\(g_j\\), all continuous.</li><li>For \\(j&lt;m\\), the fundamental theorem of calculus gives \\(f_n^{(j)}(x)=f_n^{(j)}(0)+\\int_0^x f_n^{(j+1)}(s)\\,ds\\). Uniform convergence permits passage to the limit, yielding \\(g_j(x)=g_j(0)+\\int_0^x g_{j+1}(s)\\,ds\\).</li><li>Hence \\(g_j'=g_{j+1}\\). Taking \\(f=g_0\\), we obtain \\(f\\in C^m\\), and the finite sum of uniform derivative errors tends to zero. For \\(m=0\\), this is just completeness of C.</li></ol>",
      "oralQuestions": [
        "2.LF.4"
      ]
    },
    {
      "id": "ch2-smooth-sup-incomplete",
      "title": "The supremum norm does not make Lip or C^1 complete",
      "type": "proposition",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Neither \\(\\operatorname{Lip}([0,1])\\) nor \\(C^1([0,1])\\) is complete under \\(\\|\\cdot\\|_\\infty\\). The functions \\(f_n(x)=\\sqrt{x+1/n}\\) belong to both spaces and satisfy \\(\\|f_n-\\sqrt{\\cdot}\\|_\\infty\\le n^{-1/2}\\), but their limit is neither Lipschitz nor \\(C^1\\) at zero.</p>",
      "intuition": "<p>A small height error does not constrain slopes. Here the Lipschitz constants grow with n, allowing the uniform limit to develop a vertical tangent.</p>",
      "example": "<p>For fixed \\(n\\), \\(|f_n^{\\prime}(x)|\\le\\sqrt n/2\\), which is finite but has no common bound. This explains why the compact-family result for a fixed Lipschitz bound is not contradicted.</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "Lipschitz functions with the supremum norm",
          "title": "RFA - 2026-10-13 - Class Notes"
        },
        {
          "date": "2026-10-13",
          "heading": "$C^1$ with two different norms",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>For fixed n, \\(f_n(x)=\\sqrt{x+1/n}\\) has continuous derivative \\(1/(2\\sqrt{x+1/n})\\), bounded by \\(\\sqrt n/2\\) on \\([0,1]\\). Hence \\(f_n\\) is both \\(C^1\\) and Lipschitz.</li><li>The square-root estimate gives \\(\\|f_n-\\sqrt{\\cdot}\\|_\\infty\\le1/\\sqrt n\\). Therefore \\((f_n)\\) is uniformly Cauchy with the unique uniform limit \\(f(x)=\\sqrt{x}\\).</li><li>But \\((f(x)-f(0))/x=1/\\sqrt{x}\\to\\infty\\) as \\(x\\downarrow0\\). Thus f is neither Lipschitz nor \\(C^1\\) on the closed interval. The same Cauchy sequence has no limit in either subspace, proving both incompleteness claims.</li></ol>",
      "oralQuestions": [
        "2.LF.3"
      ]
    },
    {
      "id": "ch2-euler",
      "title": "Euler interpolants and their bounds",
      "type": "proposition",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Let continuous \\(f:\\mathbb R\\to\\mathbb R\\) satisfy \\(|f|\\le M\\), choose \\(\\tau=T/N\\), and set \\(y_{k+1}=y_k+\\tau f(y_k)\\). The affine interpolant \\(y_\\tau\\) on \\([0,T]\\) obeys \\(\\|y_\\tau\\|_\\infty\\le|y_0|+TM\\) and \\(|y_\\tau(t)-y_\\tau(s)|\\le M|t-s|\\).</p>",
      "intuition": "<p>Every polygon segment has slope f evaluated at its left endpoint. A bound on the vector field immediately becomes a common bound on all slopes and on the total distance traveled.</p>",
      "example": "<p>For \\(y^{\\prime}=\\sin y\\), every Euler interpolant starting at \\(y_0\\) is \\(1\\)-Lipschitz and stays within height \\(|y_0|+T\\) on \\([0,T]\\), no matter how fine the mesh is.</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "Arzelà–Ascoli and Peano existence",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "correction": "The current lecture assumes boundedness on the region under consideration. This card gives the explicit sufficient version f continuous and bounded on R, so every Euler step is defined and remains controlled.",
      "coverage": "current",
      "proofSketch": "<ol><li>The update formula gives \\(|y_{k+1}-y_k|=\\tau|f(y_k)|\\le\\tau M\\). Summing from zero to k yields \\(|y_k-y_0|\\le k\\tau M\\le TM\\).</li><li>On each mesh interval, the affine interpolant has slope \\(f(y_k)\\), whose absolute value is at most M. Its values lie between the two endpoint values, so \\(|y_\\tau(t)|\\le|y_0|+TM\\).</li><li>For arbitrary \\(s&lt;t\\), split \\([s,t]\\) at the mesh points and sum the slope bounds on the pieces. Their lengths add to \\(t-s\\), giving \\(|y_\\tau(t)-y_\\tau(s)|\\le M(t-s)\\).</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-peano",
      "title": "Peano existence by compactness",
      "type": "theorem",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>A sufficient version used in the lecture argument is: if \\(f:\\mathbb R\\to\\mathbb R\\) is continuous and bounded, then for every \\(T>0\\) and \\(y_0\\in\\mathbb R\\), the problem \\(y^{\\prime}=f(y),\\ y(0)=y_0\\) has a \\(C^1\\) solution on \\([0,T]\\). Euler interpolants have a uniformly convergent subsequence, whose limit satisfies \\(y(t)=y_0+\\int_0^t f(y(s))\\,ds\\).</p>",
      "intuition": "<p>Uniform height and slope bounds give compactness. Continuity of f on the bounded region visited by the curves permits passage to the integral equation. This constructs a solution but does not force uniqueness.</p>",
      "example": "<p>Take \\(f(y)=\\min(\\sqrt{|y|},1)\\) and \\(y_0=0\\). On \\([0,1]\\), both \\(y(t)=0\\) and \\(y(t)=t^2/4\\) solve the same initial-value problem. Continuity suffices for existence, but here not uniqueness.</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "Arzelà–Ascoli and Peano existence",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "correction": "A global boundedness hypothesis is stated explicitly to avoid omitting the local time/region restriction needed in the lecture’s more informal bounded-region formulation.",
      "coverage": "current",
      "proofSketch": "<ol><li>Construct Euler interpolants with mesh \\(\\tau\\to0\\). The common height and Lipschitz bounds give a uniformly convergent subsequence \\(y_\\tau\\to y\\) on \\([0,T]\\) by Arzelà–Ascoli.</li><li>Let \\(\\bar y_\\tau(s)\\) be the left-endpoint value on each mesh interval. Then \\(\\|y_\\tau-\\bar y_\\tau\\|_\\infty\\le M\\tau\\), and the interpolation satisfies exactly \\(y_\\tau(t)=y_0+\\int_0^t f(\\bar y_\\tau(s))\\,ds\\).</li><li>All values stay in one compact real interval. Continuity makes f uniformly continuous there, so \\(f(\\bar y_\\tau)\\to f(y)\\) uniformly. Pass to the integral limit to obtain \\(y(t)=y_0+\\int_0^t f(y(s))\\,ds\\). The integrand is continuous, hence y is \\(C^1\\) and solves the ODE.</li></ol>",
      "proofNote": "This proves the card’s explicitly globally bounded version. Local continuity alone requires choosing a time interval that keeps the approximants inside the region of definition. No uniqueness is claimed.",
      "oralQuestions": []
    },
    {
      "id": "ch2-contraction",
      "title": "Contraction map",
      "type": "definition",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>A map \\(T:X\\to X\\) on a metric space is a contraction if there is a single constant \\(0\\le c<1\\) such that \\(d(Tx,Ty)\\le c\\,d(x,y)\\) for all \\(x,y\\in X\\). A fixed point is a point \\(x_*\\) with \\(Tx_*=x_*\\).</p>",
      "intuition": "<p>The map shrinks every distance by the same strict factor. The strict inequality is essential: merely keeping distances from increasing does not force a unique meeting point.</p>",
      "example": "<p>\\(T(x)=(x+1)/2\\) on \\(\\mathbb R\\) is a contraction with \\(c=1/2\\). The identity has Lipschitz constant \\(1\\) and fixes every point; a swap of two points is also nonexpansive but has no fixed point.</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "Banach’s contraction theorem",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": [
        "2.LF.5"
      ]
    },
    {
      "id": "ch2-banach-fixed-point",
      "title": "Banach’s contraction theorem",
      "type": "theorem",
      "section": "2.5",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Let \\((X,d)\\) be a nonempty complete metric space and \\(T:X\\to X\\) a contraction with factor \\(c<1\\). Then T has a unique fixed point \\(x_*\\), and for any \\(x_0\\), the iteration \\(x_{n+1}=Tx_n\\) converges to it. Moreover \\(d(x_n,x_*)\\le c^n d(x_1,x_0)/(1-c)\\).</p>",
      "intuition": "<p>Successive steps shrink geometrically, so their total remaining length is finite and the iterates are Cauchy. Completeness supplies the limit; contraction prevents two distinct limits from both being fixed.</p>",
      "example": "<p>For \\(T(x)=(x+1)/2\\) and \\(x_0=0\\), \\(x_n=1-2^{-n}\\to1\\). The theorem’s error bound is exact: \\(|x_n-1|\\le2^{-n}\\). On the incomplete space \\((0,1)\\), the same T has no fixed point in the space.</p>",
      "lectures": [
        {
          "date": "2026-10-13",
          "heading": "Banach’s contraction theorem",
          "title": "RFA - 2026-10-13 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "proofSketch": "<ol><li>Iterate \\(x_{n+1}=Tx_n\\). Repeated contraction gives \\(d(x_{n+1},x_n)\\le c^n d(x_1,x_0)\\). Summing from n to \\(m-1\\) gives \\(d(x_m,x_n)\\le c^n d(x_1,x_0)/(1-c)\\) for \\(m&gt;n\\).</li><li>Thus the iterates are Cauchy and converge to \\(x_*\\in X\\) by completeness. Since T is Lipschitz, it is continuous, and \\(Tx_* =\\lim_n Tx_n=\\lim_n x_{n+1}=x_*\\).</li><li>If z is another fixed point, \\(d(z,x_*)\\le c\\,d(z,x_*)\\) forces equality to zero. Letting \\(m\\to\\infty\\) in the tail estimate gives the stated error bound. If \\(c=0\\), T is constant and the iteration reaches its fixed point after one step.</li></ol>",
      "oralQuestions": [
        "2.9",
        "2.LF.5"
      ]
    },
    {
      "id": "ch2-exercises-topic",
      "title": "Function-space exercises",
      "type": "topic",
      "section": "2.6",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>The 27 October exercises test which constraints survive uniform limits, how to build dense approximants, and how derivative or Lipschitz estimates give precompactness and bounds.</p>",
      "intuition": "<p>Start by identifying the relevant quantifiers. An identity at every point survives a uniform limit; a local property whose neighborhood shrinks with the index may disappear.</p>",
      "example": "<p>Oddness survives uniform limits, while a local minimum at zero may disappear. A common slope bound for ODE solutions gives equicontinuity and thus subsequential compactness.</p>",
      "lectures": [
        {
          "date": "2026-10-27",
          "heading": "Exercise 8: odd continuous functions",
          "title": "RFA - 2026-10-27 - Class Notes"
        },
        {
          "date": "2026-10-27",
          "heading": "Exercise 10: having a local minimum at zero",
          "title": "RFA - 2026-10-27 - Class Notes"
        },
        {
          "date": "2026-10-27",
          "heading": "Compactness of a family of ODE solutions",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch2-odd-closed",
      "title": "Odd continuous functions form a closed, nondense set",
      "type": "proposition",
      "section": "2.6",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>In \\(C([-1,1])\\), the subspace \\(H=\\{f:f(-x)=-f(x)\\}\\) is closed in the supremum norm and is not dense. Uniform convergence passes the oddness identity to the limit. Every odd f satisfies \\(f(0)=0\\), so \\(\\|f-1\\|_\\infty\\ge1\\).</p>",
      "intuition": "<p>A pointwise algebraic identity is stable under limits. Its forced value at zero also creates a fixed positive distance from some target functions, ruling out density.</p>",
      "example": "<p>The functions \\(x^{2n+1}/n\\) are odd and converge uniformly to the odd zero function. No odd function can approximate the constant one with uniform error less than one.</p>",
      "lectures": [
        {
          "date": "2026-10-27",
          "heading": "Exercise 8: odd continuous functions",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "lectureStatus": "exercise",
      "correction": "The handwritten exercise starts the closedness argument without completing it. The limit-of-the-identity argument here is the explicit solution of that assigned step; the nondensity estimate is recorded in the transcription.",
      "coverage": "current",
      "proofSketch": "<ol><li>Let odd functions \\(f_n\\) converge uniformly to f. For each fixed x, pointwise convergence permits passage to \\(f_n(-x)=-f_n(x)\\), yielding \\(f(-x)=-f(x)\\). The uniform limit is continuous, so f belongs to H.</li><li>The sequential criterion therefore makes H closed in \\(C([-1,1])\\). It is also a linear subspace because the oddness identity is preserved by linear combinations.</li><li>For nondensity, every odd f has \\(f(0)=0\\). Consequently \\(\\|f-1\\|_\\infty\\ge|f(0)-1|=1\\), so the open ball of radius \\(1/2\\) around the constant one contains no member of H.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-local-minimum",
      "title": "A local minimum at zero is dense but not closed",
      "type": "proposition",
      "section": "2.6",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>Let \\(H\\subseteq C([-1,1])\\) consist of functions with a non-strict local minimum at zero. Then H is dense but not closed in the supremum norm. The sequence \\(f_n(x)=x^3+x^2/n\\) lies in H and converges uniformly to \\(x^3\\notin H\\). Density follows by flattening any f on a shrinking neighborhood of zero and joining continuously to f.</p>",
      "intuition": "<p>The neighborhood in the definition may depend on the function and shrink to zero. Conversely, creating a tiny plateau changes a continuous function by arbitrarily little while guaranteeing a non-strict local minimum.</p>",
      "example": "<p>For \\(x\\ge-1/n\\), \\(f_n(x)=x^2(x+1/n)\\ge0=f_n(0)\\), giving a local minimum. Yet for every negative x, the limit \\(x^3<0\\). The uniform error is at most \\(1/n\\).</p>",
      "lectures": [
        {
          "date": "2026-10-27",
          "heading": "Not closed",
          "title": "RFA - 2026-10-27 - Class Notes"
        },
        {
          "date": "2026-10-27",
          "heading": "Dense: flatten a shrinking neighbourhood",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "lectureStatus": "exercise",
      "correction": "The current transcription repairs the handwritten membership sign and the plateau interpolation. Density refers to a non-strict local minimum; the plateau is not a strict local minimum.",
      "coverage": "current",
      "proofSketch": "<ol><li><strong>Not closed.</strong> Set \\(f_n(x)=x^3+x^2/n=x^2(x+1/n)\\). For \\(|x|&lt;1/(2n)\\), it is nonnegative and vanishes at zero, so \\(f_n\\in H\\). But \\(\\|f_n-x^3\\|_\\infty\\le1/n\\), while \\(x^3\\) has no local minimum at zero.</li><li><strong>Dense.</strong> Given continuous f, choose continuous cutoffs \\(0\\le\\chi_\\delta\\le1\\), equal to zero on \\(|x|\\le\\delta/2\\) and one on \\(|x|\\ge\\delta\\). Define \\(g_\\delta(x)=f(0)+\\chi_\\delta(x)(f(x)-f(0))\\).</li><li>Then \\(g_\\delta\\) is constant near zero, so has a non-strict local minimum there. Also \\(\\|g_\\delta-f\\|_\\infty\\le\\sup_{|x|\\le\\delta}|f(x)-f(0)|\\to0\\). Thus H is dense.</li></ol>",
      "proofNote": "The cutoff formula is an equivalent AI-authored version of the lecture’s shrinking-plateau construction. The local minimum is non-strict.",
      "oralQuestions": []
    },
    {
      "id": "ch2-ode-precompact",
      "title": "A family of ODE solutions is precompact",
      "type": "proposition",
      "section": "2.6",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For global solutions \\(f_n^{\\prime}(t)=\\cos(f_n(t)+t)\\), \\(f_n(0)=n/(1+n)\\), the restrictions to any \\([0,T]\\) form a precompact subset of \\(C([0,T])\\). Indeed \\(|f_n(t)|\\le1+T\\) and \\(|f_n(t)-f_n(s)|\\le|t-s|\\), so Arzelà–Ascoli applies.</p>",
      "intuition": "<p>The right-hand side is bounded by one regardless of the solution. This gives both a common speed limit and, using the initial values, a common height bound.</p>",
      "example": "<p>On \\([0,2]\\), all the solution graphs remain within \\([-3,3]\\), and moving the input by \\(0.01\\) changes any output by at most \\(0.01\\). Thus one modulus of continuity controls the entire family.</p>",
      "lectures": [
        {
          "date": "2026-10-27",
          "heading": "Compactness of a family of ODE solutions",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "lectureStatus": "exercise",
      "coverage": "current",
      "proofSketch": "<ol><li>The ODE gives \\(|f_n'(t)|=|\\cos(f_n(t)+t)|\\le1\\) for every n and t. Integrating between s and t gives \\(|f_n(t)-f_n(s)|\\le|t-s|\\), so the family is equicontinuous with one common Lipschitz constant.</li><li>Using the initial data, \\(|f_n(t)|\\le n/(1+n)+\\int_0^t|f_n'(r)|\\,dr\\le1+T\\) on \\([0,T]\\). This supplies a uniform bound independent of n.</li><li>The domain is compact, so boundedness and equicontinuity imply precompactness by Arzelà–Ascoli. We do not need to prove the original set of solutions closed, because the claimed conclusion allows limits in its closure.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-mean-zero-bound",
      "title": "Mean zero and a Lipschitz bound control height",
      "type": "proposition",
      "section": "2.6",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>If \\(f:[0,1]\\to\\mathbb R\\) is L-Lipschitz and \\(\\int_0^1 f(y)\\,dy=0\\), then \\(|f(x)|\\le L\\int_0^1|x-y|\\,dy=L(x^2-x+1/2)\\le L/2\\). Hence \\(\\|f\\|_\\infty\\le L/2\\).</p>",
      "intuition": "<p>Mean zero removes the freedom to translate a graph vertically. Compare the height at x with the average height, then use the common slope bound to control that difference.</p>",
      "example": "<p>For \\(f(x)=L(x-1/2)\\), the mean is zero, the Lipschitz constant is L, and \\(\\|f\\|_\\infty=L/2\\), so the uniform bound is sharp.</p>",
      "lectures": [
        {
          "date": "2026-10-27",
          "heading": "Item 4: mean-zero Lipschitz functions",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "lectureStatus": "exercise",
      "correction": "The source does not expand its notation C_L and proves only a boundedness estimate. This card explicitly assumes a common Lipschitz constant L and does not attribute an unwritten compactness conclusion to that page.",
      "coverage": "current",
      "proofSketch": "<ol><li>The interval has length one and f has mean zero. Therefore \\(f(x)=\\int_0^1(f(x)-f(y))\\,dy\\). This removes the otherwise arbitrary vertical offset.</li><li>Apply the integral triangle inequality and the Lipschitz bound: \\(|f(x)|\\le L\\int_0^1|x-y|\\,dy\\). Split at y=x to compute the integral as \\(x^2/2+(1-x)^2/2=x^2-x+1/2\\).</li><li>On \\([0,1]\\), this quadratic is at most \\(1/2\\), so \\(\\|f\\|_\\infty\\le L/2\\). The function \\(f(x)=L(x-1/2)\\) has mean zero and attains that bound, confirming sharpness.</li></ol>",
      "oralQuestions": []
    },
    {
      "id": "ch2-c0-real",
      "title": "C_0(R): vanishing tails and uniform closure",
      "type": "proposition",
      "section": "2.6",
      "chapter": "2",
      "reference": "Current lecture result",
      "page": null,
      "precise": "<p>For continuous \\(f:\\mathbb R\\to\\mathbb R\\), \\(f\\in\\overline{C_c(\\mathbb R)}^{\\|\\cdot\\|_\\infty}\\) if and only if for every \\(\\varepsilon>0\\) there is \\(R>0\\) such that \\(|x|>R\\Rightarrow|f(x)|<\\varepsilon\\). The forward implication uses a compactly supported approximant; the converse uses continuous cutoffs.</p>",
      "intuition": "<p>Compact support means the tail is exactly zero. Vanishing at infinity means its height can be made as small as desired; that is precisely enough to cut it off with small uniform error.</p>",
      "example": "<p>For \\(f(x)=1/(1+x^2)\\), a cutoff equal to one on \\([-R,R]\\) and zero outside \\([-R-1,R+1]\\) gives an approximant with error at most \\(1/(1+R^2)\\). The original f has support all of \\(\\mathbb R\\).</p>",
      "lectures": [
        {
          "date": "2026-10-27",
          "heading": "The uniform closure of compactly supported continuous functions",
          "title": "RFA - 2026-10-27 - Class Notes"
        }
      ],
      "sourceKind": "current-transcription",
      "referenceRole": "current-lecture-primary",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "correction": "The current transcription corrects the handwritten identification of C_0 with compact support. It states the equivalence but works out only closure implies vanishing tails; the cutoff example explains the converse.",
      "coverage": "current",
      "proofSketch": "<ol><li>If f is a uniform limit of compactly supported functions, choose g with \\(\\|f-g\\|_\\infty&lt;\\varepsilon\\). Outside a sufficiently large interval, g vanishes, hence \\(|f(x)|&lt;\\varepsilon\\). Thus f vanishes at infinity.</li><li>Conversely, assume f is continuous and has uniformly small tails. It is bounded: use the tail estimate outside one interval and continuity on the remaining compact interval.</li><li>Choose continuous cutoffs \\(0\\le\\chi_R\\le1\\), equal to one on \\([-R,R]\\) and zero outside \\([-R-1,R+1]\\). Then \\(\\chi_Rf\\in C_c(\\mathbb R)\\), and \\(\\|\\chi_Rf-f\\|_\\infty\\le\\sup_{|x|&gt;R}|f(x)|\\to0\\). This proves membership in the uniform closure.</li></ol>",
      "proofNote": "The current 27 October transcription works out the forward implication and states the equivalence. The cutoff argument supplies the converse as an AI-authored study proof.",
      "oralQuestions": []
    },
    {
      "id": "ch3-classical-topic",
      "title": "From Riemann to measure",
      "type": "topic",
      "section": "3.1",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Riemann integration brackets a bounded function by step functions on finite interval partitions. Peano–Jordan measure brackets a bounded set by finite unions of rectangles. Lebesgue measure adds the countable stability required for limit arguments.</p>",
      "intuition": "<p>The issue is how finely an approximation may be assembled. Finite partitions work for tame boundaries; countably many small pieces can cover dense exceptional sets.</p>",
      "example": "<p>The rational points of \\([0,1]\\) have Peano–Jordan inner content zero and outer content one, but Lebesgue measure zero.</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Riemann integration on an interval",
          "title": "RFA - 2026-10-16 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-riemann",
      "title": "Riemann integrability",
      "type": "definition",
      "section": "3.1",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For bounded \\(f:[a,b]\\to\\mathbb R\\), set \\(I_*(f)=\\sup_{h\\le f}\\int_a^b h\\) and \\(I^*(f)=\\inf_{h\\ge f}\\int_a^b h\\), where \\(h\\) ranges over step functions on finite partitions. The function is Riemann integrable when \\(I_*(f)=I^*(f)\\).</p>",
      "intuition": "<p>Lower and upper rectangular sums must squeeze the same area. The partition becomes finer until no unresolved area remains.</p>",
      "example": "<p>For \\(f(x)=x\\) on \\([0,1]\\), equal-width partitions give lower sums \\((n-1)/(2n)\\) and upper sums \\((n+1)/(2n)\\), both tending to \\(1/2\\).</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Riemann integration on an interval",
          "title": "RFA - 2026-10-16 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-elementary-set",
      "title": "Elementary set and volume",
      "type": "definition",
      "section": "3.1",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>An elementary subset of \\(\\mathbb R^d\\) is a finite union of pairwise disjoint rectangles; its volume is the sum of their volumes. A rectangle with side lengths \\(\\ell_1,\\ldots,\\ell_d\\) has volume \\(\\prod_{j=1}^d\\ell_j\\).</p>",
      "intuition": "<p>Finite combinations of boxes provide a geometric measuring instrument before a general theory of measurable sets exists.</p>",
      "example": "<p>Two disjoint planar rectangles of dimensions \\(2\\times3\\) and \\(1\\times4\\) have union of area \\(6+4=10\\).</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Peano–Jordan measure",
          "title": "RFA - 2026-10-16 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.1",
        "3.2"
      ]
    },
    {
      "id": "ch3-jordan",
      "title": "Peano–Jordan measurability",
      "type": "definition",
      "section": "3.1",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For bounded \\(A\\subset\\mathbb R^d\\), define \\(m_{*,PJ}(A)=\\sup\\{m(I):I\\subseteq A,\\ I\\text{ elementary}\\}\\) and \\(m^{*,PJ}(A)=\\inf\\{m(I):A\\subseteq I,\\ I\\text{ elementary}\\}\\). The set is Peano–Jordan measurable when these agree; their value is \\(m_{PJ}(A)\\).</p>",
      "intuition": "<p>Inside and outside finite-box approximations must approach the same volume. For a nonnegative Riemann-integrable function, the subgraph has this volume equal to the integral.</p>",
      "example": "<p>A rectangle is already an elementary set, so the inner and outer contents equal its usual volume.</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Peano–Jordan measure",
          "title": "RFA - 2026-10-16 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.1"
      ]
    },
    {
      "id": "ch3-jordan-boundary",
      "title": "Null boundary gives Jordan measurability",
      "type": "proposition",
      "section": "3.1",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If a bounded \\(A\\subset\\mathbb R^d\\) has boundary of Peano–Jordan outer content zero, then \\(A\\) is Peano–Jordan measurable.</p>",
      "intuition": "<p>The boundary is where an approximating rectangle can be uncertain about membership. If that uncertainty fits in arbitrarily small total volume, inner and outer answers agree.</p>",
      "example": "<p>The boundary of a planar rectangle is four line segments. Thin strips cover them with arbitrarily small total area, so the rectangle is measurable in the plane.</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Peano–Jordan measure",
          "title": "RFA - 2026-10-16 - Class Notes"
        }
      ],
      "correction": "Removing the boundary preserves measure only when the boundary is null; the current transcription explicitly corrects the unrestricted handwritten claim.",
      "coverage": "current",
      "proofSketch": "<p>Fix \\(\\varepsilon&gt;0\\). Since the bounded closed set \\(\\partial A\\) has Jordan outer content zero, cover it by an open elementary set \\(U\\) with \\(m(U)&lt;\\varepsilon\\). Compactness of the boundary supplies a positive distance from \\(\\partial A\\) to \\(U^c\\). Choose a finite rectangular grid covering \\(A\\), fine enough that every cell meeting the boundary lies inside \\(U\\).</p><p>The cells contained in \\(A\\) give an inner elementary approximation; cells meeting \\(A\\) give an outer one. Any discrepancy is confined to boundary cells, so the difference of their volumes is at most \\(m(U)&lt;\\varepsilon\\). Grid boundaries have zero volume. Let \\(\\varepsilon\\downarrow0\\): inner and outer Jordan contents agree.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-jordan-failure",
      "title": "Jordan measure fails under countable unions",
      "type": "proposition",
      "section": "3.1",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Let \\(D=\\mathbb Q\\cap[0,1]=\\{x_1,x_2,\\ldots\\}\\) and \\(A_k=\\{x_1,\\ldots,x_k\\}\\). Each \\(A_k\\) has Jordan measure zero, but \\(\\bigcup_k A_k=D\\) has Jordan inner content zero and outer content one, hence is not Jordan measurable.</p>",
      "intuition": "<p>Being dense is compatible with being countable. Finite intervals cannot isolate all rational points with small total length, whereas countably many intervals can.</p>",
      "example": "<p>The indicator \\(\\mathbf1_D\\) has lower Riemann integral zero and upper Riemann integral one. It will nevertheless have Lebesgue integral zero.</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Failure under countable unions",
          "title": "RFA - 2026-10-16 - Class Notes"
        },
        {
          "date": "2026-10-21",
          "heading": "Dirichlet function: Riemann versus Lebesgue",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Every finite set can be covered by finitely many intervals of arbitrarily small total length, so \\(m_{PJ}(A_k)=0\\). If an elementary set lies inside \\(D=\\mathbb Q\\cap[0,1]\\), none of its component intervals can have positive length: such an interval contains irrational points. Thus the inner content of \\(D\\) is zero.</p><p>Conversely, an elementary set containing \\(D\\) has closure containing \\([0,1]\\), by density of the rationals. Taking the closure of a finite union of intervals changes only finitely many endpoints and does not change its volume. Its volume is therefore at least one; \\([0,1]\\) itself attains this bound. The outer content is one, proving the failure of measurability after a countable union.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.1"
      ]
    },
    {
      "id": "ch3-measure-topic",
      "title": "Lebesgue measure",
      "type": "topic",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Lebesgue-measurable subsets of \\(\\mathbb R^d\\) form a \\(\\sigma\\)-algebra, and their measure is countably additive on disjoint unions, agrees with box volume, and is translation invariant.</p>",
      "intuition": "<p>Measure must behave well under the countable operations used to define limits. Null exceptional sets can then be collected without gaining positive measure.</p>",
      "example": "<p>Writing \\([0,1]\\cap\\mathbb Q\\) as a countable union of singletons shows that its measure is zero.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Properties of Lebesgue measure",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-measurable-set",
      "title": "Lebesgue-measurable set",
      "type": "definition",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Measurability criterion adapted from current transcribed lectures; elementary-volume construction bridge, intuition, and examples are AI-authored study explanations.",
      "precise": "<p><strong>Construction from elementary volume (study explanation).</strong> First assign an elementary set \\(I\\), a finite union of rectangles, its volume \\(m(I)\\). For a bounded open set \\(U\\), define \\(m(U)=\\sup\\{m(I):I\\subseteq U,\\ I\\text{ elementary}\\}\\). For compact \\(K\\), define \\(m(K)=\\inf\\{m(I):K\\subseteq I,\\ I\\text{ elementary}\\}\\). These give the open and compact volumes used next.</p><p>In the lecture construction, for bounded \\(E\\subset\\mathbb R^d\\), \\(m^*(E)=\\inf_{A\\supseteq E,\\ A\\text{ open bounded}}m(A)\\) and \\(m_*(E)=\\sup_{K\\subseteq E,\\ K\\text{ compact}}m(K)\\). It is measurable when these agree. For unbounded sets, test bounded intersections and set \\(m(E)=\\lim_{R\\to\\infty}m(E\\cap B_R(0))\\).</p>",
      "intuition": "<p>Approximate from outside by open regions and from inside by compact pieces. Countably many rectangles can participate through the open approximations.</p>",
      "example": "<p>The interval \\((0,1)\\) is approximated from inside by \\([\\varepsilon,1-\\varepsilon]\\) and from outside by \\((-\\varepsilon,1+\\varepsilon)\\); both measures approach one.</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Lebesgue measure on $\\mathbb R^n$",
          "title": "RFA - 2026-10-16 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.2"
      ]
    },
    {
      "id": "ch3-regularity",
      "title": "Regularity of Lebesgue measure",
      "type": "theorem",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For every Lebesgue-measurable \\(E\\subset\\mathbb R^d\\), \\[m(E)=\\inf_{A\\supseteq E,\\ A\\text{ open}}m(A)=\\sup_{K\\subseteq E,\\ K\\text{ compact}}m(K).\\] The value may be infinite.</p>",
      "intuition": "<p>A measurable set may be geometrically complicated, but its volume is captured by open supersets and compact subsets. This later supports approximation arguments.</p>",
      "example": "<p>For \\(E=(0,1)\\), compact intervals \\([1/n,1-1/n]\\) have lengths tending to \\(m(E)=1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Regularity and comparison with Peano–Jordan measure",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>For bounded measurable sets this is precisely the lecture's equality of inner compact and outer open approximations. For general \\(E\\), exhaust it by \\(E\\cap B_R(0)\\). Their measures increase to \\(m(E)\\); compact approximations inside these bounded pieces prove the inner equality, including when \\(m(E)=\\infty\\).</p><p>For the outer equality, the infinite-measure case follows immediately from monotonicity. If \\(m(E)&lt;\\infty\\), partition \\(E\\) into disjoint bounded shells \\(E_j\\). Cover each by an open \\(U_j\\) with \\(m(U_j)&lt;m(E_j)+\\varepsilon2^{-j}\\). Then \\(U=\\bigcup_jU_j\\) is open, contains \\(E\\), and \\(m(U)\\le m(E)+\\varepsilon\\). Monotonicity gives the opposite inequality; let \\(\\varepsilon\\downarrow0\\).</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-null-set",
      "title": "Null set and outer measure zero",
      "type": "definition",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>A Lebesgue-measurable set \\(N\\) is null if \\(m(N)=0\\). More generally, \\(m^*(N)=0\\) already implies measurability and \\(m(N)=0\\), since \\(0\\le m_*(N)\\le m^*(N)\\).</p>",
      "intuition": "<p>A null set can be covered with arbitrarily small total volume. It need not be empty or lack accumulation points.</p>",
      "example": "<p>A singleton in \\(\\mathbb R^d\\) lies inside balls of arbitrarily small radius, and consequently has measure zero.</p>",
      "lectures": [
        {
          "date": "2026-10-16",
          "heading": "Lebesgue measure on $\\mathbb R^n$",
          "title": "RFA - 2026-10-16 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-finite-measure-operations",
      "title": "Finite operations on measurable sets",
      "type": "proposition",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Measurable sets are closed under union, intersection and difference. If \\(E\\subseteq F\\), then \\(m(E)\\le m(F)\\). Also \\(m(E\\cup F)\\le m(E)+m(F)\\), with equality for disjoint sets. If \\(F\\subseteq E\\) and \\(m(F)&lt;\\infty\\), then \\(m(E\\setminus F)=m(E)-m(F)\\).</p>",
      "intuition": "<p>Overlap can only decrease the sum of volumes. Subtraction is legitimate only when it avoids the undefined expression infinity minus infinity.</p>",
      "example": "<p>For \\(E=[0,3]\\), \\(F=[1,2]\\), the difference has measure \\(3-1=2\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Properties of Lebesgue measure",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "correction": "The current transcription adds the finiteness condition missing in the handwritten subtraction formula. The additive identity m(E)=m(E\\F)+m(F) has no such subtraction problem.",
      "coverage": "current",
      "proofSketch": "<p>For bounded \\(E,F\\), choose compact inner and open outer approximations whose volume gaps are arbitrarily small. Unions and intersections of these approximants bracket \\(E\\cup F\\) and \\(E\\cap F\\). For the difference, use the compact set \\(K_E\\setminus U_F\\) and open set \\(U_E\\setminus K_F\\). Their gaps are controlled by the original two errors, proving measurability; bounded intersections handle unbounded sets.</p><p>Monotonicity follows by inclusion of admissible approximations. Finite additivity of disjoint elementary volumes passes through these approximations, giving additivity for disjoint measurable sets. Disjointify \\(E\\cup F=E\\sqcup(F\\setminus E)\\) to obtain subadditivity. Finally \\(E=(E\\setminus F)\\sqcup F\\) gives the difference formula; \\(m(F)&lt;\\infty\\) makes subtraction legitimate.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. The transfer of elementary volume identities through compact/open approximation is the measure-construction step condensed here.",
      "oralQuestions": []
    },
    {
      "id": "ch3-countable-measure",
      "title": "Countable additivity and subadditivity",
      "type": "theorem",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Countable unions and intersections of measurable sets are measurable. For measurable \\(E_k\\), \\[m\\Bigl(\\bigcup_{k=1}^{\\infty}E_k\\Bigr)\\le\\sum_{k=1}^{\\infty}m(E_k).\\] Equality holds when the \\(E_k\\) are pairwise disjoint.</p>",
      "intuition": "<p>Countable additivity is the bridge from finite geometry to sequential limits. Overlapping pieces may be counted repeatedly on the right.</p>",
      "example": "<p>The disjoint intervals \\((2^{-k},2^{-k+1}]\\), \\(k\\ge1\\), partition \\((0,1]\\). Their lengths sum to \\(\\sum_{k\\ge1}2^{-k}=1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Properties of Lebesgue measure",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>First use countable subadditivity of outer measure: combine covers of the sets whose excess volumes are at most \\(\\varepsilon2^{-k}\\). Disjointify by setting \\(D_k=E_k\\setminus\\bigcup_{j&lt;k}E_j\\). If the union is bounded, let \\(F_N=\\bigcup_{k\\le N}D_k\\). Finite additivity gives \\(m(F_N)=\\sum_{k\\le N}m(D_k)\\). Compact inner approximations of \\(F_N\\) show that the inner measure of the union is at least the limit of these sums, while outer subadditivity gives the reverse bound. Hence the union is measurable.</p><p>Apply this argument inside balls for unbounded unions. It also yields countable additivity when the original sets are disjoint. In general, \\(D_k\\subseteq E_k\\) gives subadditivity. Intersections are measurable by taking complements and using De Morgan's law.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. Uses the elementary outer-measure covering property from the construction; this is not a deduction from finite additivity alone.",
      "oralQuestions": []
    },
    {
      "id": "ch3-measure-below",
      "title": "Continuity of measure from below",
      "type": "theorem",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(E_k\\) are measurable and \\(E_k\\subseteq E_{k+1}\\), then \\[m\\Bigl(\\bigcup_kE_k\\Bigr)=\\lim_km(E_k)=\\sup_km(E_k).\\] No finite-measure assumption is needed.</p>",
      "intuition": "<p>An increasing sequence collects more and more of its union. Split each new contribution into a disjoint increment and use countable additivity.</p>",
      "example": "<p>For \\(E_k=[0,k]\\), the measures tend to infinity, equal to the measure of \\([0,\\infty)\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Properties of Lebesgue measure",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Separate the new material added at each stage: let \\(D_1=E_1\\) and \\(D_k=E_k\\setminus E_{k-1}\\) for \\(k\\ge2\\). The sets \\(D_k\\) are measurable and pairwise disjoint. Their union is \\(\\bigcup_kE_k\\), while \\(E_N=\\bigsqcup_{k\\le N}D_k\\).</p><p>Countable additivity therefore gives \\[m\\Bigl(\\bigcup_kE_k\\Bigr)=\\sum_{k=1}^{\\infty}m(D_k)=\\lim_{N\\to\\infty}\\sum_{k=1}^{N}m(D_k)=\\lim_Nm(E_N).\\] Since the measures increase, the last limit is their supremum. This argument never subtracts infinite quantities: the nonnegative series and its partial sums remain meaningful even when the answer is infinite.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-measure-above",
      "title": "Continuity of measure from above",
      "type": "theorem",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(E_k\\) are measurable, \\(E_k\\supseteq E_{k+1}\\), and \\(m(E_1)&lt;\\infty\\), then \\[m\\Bigl(\\bigcap_kE_k\\Bigr)=\\lim_km(E_k)=\\inf_km(E_k).\\]</p>",
      "intuition": "<p>Convert a decreasing sequence into increasing complements inside a finite initial set. Finiteness makes the subtraction meaningful.</p>",
      "example": "<p>For \\(E_k=[0,1/k]\\), both sides are zero. Without finiteness, \\(E_k=[k,\\infty)\\) have infinite measure but empty intersection.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Properties of Lebesgue measure",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Work inside the finite-measure set \\(E_1\\). Define \\(F_k=E_1\\setminus E_k\\). Since \\(E_k\\) decrease, \\(F_k\\) increase and \\(\\bigcup_kF_k=E_1\\setminus\\bigcap_kE_k\\). Continuity from below gives \\(m(\\bigcup_kF_k)=\\lim_km(F_k)\\).</p><p>Now use \\(m(F_k)=m(E_1)-m(E_k)\\), and the corresponding formula for the union. Cancelling the finite number \\(m(E_1)\\) proves \\(m(\\bigcap_kE_k)=\\lim_km(E_k)\\). The decreasing measures have limit equal to their infimum. The finiteness hypothesis is essential for this subtraction: \\(E_k=[k,\\infty)\\) have infinite measure but empty intersection.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-translation",
      "title": "Translation invariance",
      "type": "theorem",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(E\\subset\\mathbb R^d\\) is measurable and \\(a\\in\\mathbb R^d\\), then \\(a+E=\\{a+x:x\\in E\\}\\) is measurable and \\(m(a+E)=m(E)\\).</p>",
      "intuition": "<p>Lebesgue volume records size independently of location. Moving a set cannot create or remove volume.</p>",
      "example": "<p>The intervals \\([0,1]\\) and \\([100,101]\\) both have measure one.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Properties of Lebesgue measure",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Translation preserves rectangle side lengths, and hence volumes of elementary sets. It also carries open sets to open sets and compact sets to compact sets. Translating each admissible inner or outer approximation gives an approximation with exactly the same volume; translating back gives the reverse inequality. Thus both inner and outer contents are invariant for bounded sets.</p><p>Consequently a bounded measurable \\(E\\) remains measurable and has the same measure after translation. For unbounded \\(E\\), apply this result to the increasing bounded sets \\(E\\cap B_R(0)\\). Their translates exhaust \\(a+E\\); continuity from below then gives \\(m(a+E)=m(E)\\), also when the measure is infinite.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-countable-null",
      "title": "Countable unions of null sets are null",
      "type": "proposition",
      "section": "3.2",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If each \\(N_k\\) is null, then \\(\\bigcup_kN_k\\) is null, since its measure is at most \\(\\sum_km(N_k)=0\\). In particular, every countable subset of \\(\\mathbb R^d\\) is null.</p>",
      "intuition": "<p>Countably many separate exceptions can be replaced by one common exceptional set. This is essential when one property is required for every term of a sequence.</p>",
      "example": "<p>Enumerating \\(D=\\mathbb Q\\cap[0,1]\\) gives \\(m(D)=0\\), even though \\(D\\) is dense in \\([0,1]\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "The Dirichlet set has measure zero",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>The countable union is measurable because measurable sets are closed under countable unions. Nonnegativity and countable subadditivity give \\[0\\le m\\Bigl(\\bigcup_kN_k\\Bigr)\\le\\sum_km(N_k)=0.\\] Thus its measure is zero; overlaps between the sets do not matter.</p><p>Each singleton in \\(\\mathbb R^d\\) is null because it can be covered by a cube of arbitrarily small side length. Enumerating a countable set and applying the union result proves the final assertion. This argument also explains why countably many separate exceptional sets in a sequence of a.e. assertions can be replaced by one common null exceptional set.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.1"
      ]
    },
    {
      "id": "ch3-measurable-topic",
      "title": "Measurable functions",
      "type": "topic",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>A measurable function has measurable level sets. Measurability is stable under defined arithmetic operations and countable limits; simple functions then provide a finite-valued approximation tool.</p>",
      "intuition": "<p>Lebesgue integration groups inputs according to output size. Measurable level sets ensure these groups have meaningful volumes.</p>",
      "example": "<p>The function \\(\\mathbf1_{\\mathbb Q\\cap[0,1]}\\) is measurable and simple even though it is discontinuous at every point of \\([0,1]\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Measurable functions and the extended real line",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-measurable-function",
      "title": "Lebesgue-measurable function",
      "type": "definition",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(\\Omega\\subset\\mathbb R^d\\), a function \\(f:\\Omega\\to\\overline{\\mathbb R}=\\mathbb R\\cup\\{-\\infty,+\\infty\\}\\) is measurable when \\(\\{x\\in\\Omega:f(x)&gt;\\alpha\\}\\) is measurable for every \\(\\alpha\\in\\mathbb R\\).</p>",
      "intuition": "<p>Every threshold question about the value of a function must select a measurable set. Infinite values are allowed, but undefined arithmetic such as infinity minus infinity is not.</p>",
      "example": "<p>For \\(f(x)=x^2\\) on \\(\\mathbb R\\), each strict superlevel set is open or all of \\(\\mathbb R\\), so \\(f\\) is measurable.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Measurable functions and the extended real line",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.3"
      ]
    },
    {
      "id": "ch3-measurability-tests",
      "title": "Equivalent tests for measurability",
      "type": "theorem",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Measurability is equivalently tested with \\(\\{f\\ge\\alpha\\}\\), \\(\\{f\\le\\alpha\\}\\), or \\(\\{f&lt;\\alpha\\}\\) for every real \\(\\alpha\\). Equivalently, \\(f^{-1}(U)\\) is measurable for every open \\(U\\subset\\overline{\\mathbb R}\\). Continuous real functions on \\(\\mathbb R^d\\) are measurable.</p>",
      "intuition": "<p>Complements switch upper and lower thresholds; countable unions and intersections switch strict and non-strict inequalities.</p>",
      "example": "<p>One identity is \\(\\{f\\ge\\alpha\\}=\\bigcap_{n\\ge1}\\{f&gt;\\alpha-1/n\\}\\); another is \\(\\{f\\le\\alpha\\}=\\Omega\\setminus\\{f&gt;\\alpha\\}\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Measurable functions and the extended real line",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Start from measurable strict superlevel sets. The identities \\[\\{f\\ge a\\}=\\bigcap_{n\\ge1}\\{f&gt;a-1/n\\},\\qquad \\{f\\le a\\}=\\Omega\\setminus\\{f&gt;a\\}\\] and complementation give the other threshold sets. Conversely, for example, \\(\\{f&gt;a\\}=\\bigcup_{n\\ge1}\\{f\\ge a+1/n\\}\\), so the non-strict test recovers the original one. Similar identities handle the remaining alternatives.</p><p>Every open subset of the extended real line is a countable union of basic intervals, including endpoint rays. Their inverse images are built from threshold sets, proving the open-set test. Finally, a continuous real function has open inverse images of open sets; Euclidean open sets are Lebesgue measurable.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-measurable-arithmetic",
      "title": "Arithmetic of measurable functions",
      "type": "proposition",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For finite-valued measurable \\(f,g\\), their sum, difference, product, scalar multiples, maximum and minimum are measurable. The quotient is measurable where \\(g\\ne0\\). Also \\(f^+=\\max(f,0)\\), \\(f^-=\\max(-f,0)\\), and \\(|f|=f^++f^-\\) are measurable.</p>",
      "intuition": "<p>The operations used in estimates preserve the ability to integrate. Positive and negative parts isolate the two signs before defining signed integrals.</p>",
      "example": "<p>For \\(f(x)=x\\), \\(f^+(x)=\\max(x,0)\\) and \\(f^-(x)=\\max(-x,0)\\), so \\(f=f^+-f^-\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Measurable functions and the extended real line",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "correction": "For extended-real functions these arithmetic claims apply only where the operations are defined.",
      "coverage": "current",
      "proofSketch": "<p>A concrete start is \\[\\{f+g&gt;a\\}=\\bigcup_{q\\in\\mathbb Q}\\bigl(\\{f&gt;q\\}\\cap\\{g&gt;a-q\\}\\bigr),\\] which is measurable. More generally, the map \\(x\\mapsto(f(x),g(x))\\) has measurable inverse images of open sets: express each planar open set as a countable union of rational rectangles. Composing with a continuous operation therefore gives a measurable function.</p><p>Use addition, subtraction, multiplication, maximum and minimum as continuous operations on \\(\\mathbb R^2\\). Division is continuous on the open region where the second coordinate is nonzero, giving measurability on \\(\\{g\\ne0\\}\\). The one-variable continuous maps \\(t\\mapsto\\max(t,0)\\), \\(\\max(-t,0)\\), and \\(|t|\\) give the positive part, negative part, and absolute value. Finite values avoid undefined extended-real arithmetic.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-measurable-limits",
      "title": "Measurability of countable limits",
      "type": "theorem",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(f_k\\), the functions \\(\\sup_k f_k\\), \\(\\inf_k f_k\\), \\(\\limsup_kf_k\\), and \\(\\liminf_kf_k\\) are measurable. Hence a pointwise limit of measurable functions is measurable.</p>",
      "intuition": "<p>Countability lets level sets of limits be rewritten as countable operations on level sets of the approximants.</p>",
      "example": "<p>If \\(f_k=\\mathbf1_{[0,1-1/k]}\\), then \\(f_k\\to\\mathbf1_{[0,1)}\\), a measurable function; the endpoint is handled by the actual pointwise limit.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Measurable functions and the extended real line",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>For \\(s=\\sup_kf_k\\), the identity \\(\\{s&gt;a\\}=\\bigcup_k\\{f_k&gt;a\\}\\) proves measurability. For \\(i=\\inf_kf_k\\), use \\(\\{i&lt;a\\}=\\bigcup_k\\{f_k&lt;a\\}\\) and the equivalent threshold tests. Both identities involve only countable unions.</p><p>Now write the lower and upper limits using tail extrema: \\[\\liminf_k f_k=\\sup_n\\inf_{k\\ge n}f_k,\\qquad \\limsup_k f_k=\\inf_n\\sup_{k\\ge n}f_k.\\] Repeated application of the first step proves their measurability, including infinite values. Where a pointwise limit exists everywhere, it equals both expressions, so it is measurable as well. An a.e. limit can also be made measurable after defining it on the null exceptional set.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-simple-function",
      "title": "Indicator and simple function",
      "type": "definition",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(A\\), \\(\\mathbf1_A\\) equals one on \\(A\\) and zero elsewhere. A real-valued simple function takes finitely many values and can be written \\(\\phi=\\sum_{j=1}^N\\alpha_j\\mathbf1_{E_j}\\), with measurable disjoint level sets \\(E_j\\).</p>",
      "intuition": "<p>The function has only finitely many output heights; its level sets may be much more complicated than intervals.</p>",
      "example": "<p>On \\([0,1]\\), \\(\\phi=2\\mathbf1_{\\mathbb Q\\cap[0,1]}+3\\mathbf1_{[0,1]\\setminus\\mathbb Q}\\) is simple despite its highly interlaced level sets.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Indicators, simple functions, and their integrals",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.4"
      ]
    },
    {
      "id": "ch3-simple-integral",
      "title": "Integral of a simple function",
      "type": "definition",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Let \\(\\mathcal S\\) be the real-valued simple functions zero outside some ball. For disjoint level sets, define \\(\\int\\phi\\,dx=\\sum_j\\alpha_jm(E_j)\\), with \\(0\\cdot\\infty=0\\). The integral is linear and monotone on \\(\\mathcal S\\).</p>",
      "intuition": "<p>Multiply each height by the volume of the region where it occurs and add. The zero level may extend across all of space without contributing area.</p>",
      "example": "<p>For \\(\\phi=2\\mathbf1_{[0,1]}+3\\mathbf1_{(1,2]}\\), the integral is \\(2\\cdot1+3\\cdot1=5\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Indicators, simple functions, and their integrals",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.4"
      ]
    },
    {
      "id": "ch3-simple-approximation",
      "title": "Uniform approximation by simple functions",
      "type": "theorem",
      "section": "3.3",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(f\\ge0\\) is measurable, bounded, and zero outside a ball, there exist \\(\\psi_n,\\phi_n\\in\\mathcal S\\), supported in that ball, with \\(\\psi_n\\le f\\le\\phi_n\\) and \\(\\|\\phi_n-\\psi_n\\|_\\infty\\to0\\). If \\(0\\le f\\le M\\), slicing its range into widths \\(M2^{-n}\\) gives error at most \\(M2^{-n}\\).</p>",
      "intuition": "<p>Slice vertically through output values instead of partitioning the input space. Common bounded support converts height error into an integral error.</p>",
      "example": "<p>On \\([0,1]\\), round \\(f(x)=x\\) down and up to adjacent multiples of \\(2^{-n}\\). The bracketing functions differ by at most \\(2^{-n}\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Approximation by simple functions",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "correction": "The transcription restores the factor M omitted from the handwritten approximation coefficients. A finite upper bound is enough; f need not attain a maximum.",
      "coverage": "current",
      "proofSketch": "<p>Choose a finite \\(M&gt;0\\) with \\(0\\le f\\le M\\), and set \\(h_n=M2^{-n}\\). The sets \\(E_{k,n}=\\{(k-1)h_n&lt;f\\le kh_n\\}\\), for \\(1\\le k\\le2^n\\), are measurable and lie in the ball outside which \\(f\\) is zero. Set \\(\\psi_n=\\sum_k(k-1)h_n\\mathbf1_{E_{k,n}}\\) and \\(\\phi_n=\\sum_k kh_n\\mathbf1_{E_{k,n}}\\), with both zero where \\(f=0\\).</p><p>These functions have finite range and vanish outside the same ball. On each band, the two endpoint values bracket \\(f\\) and differ by \\(h_n\\), so \\(0\\le\\phi_n-\\psi_n\\le M2^{-n}\\) everywhere. This proves uniform approximation. Boundedness is what makes finitely many bands sufficient; the argument does not give uniform finite-range approximation of an unbounded function.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.2"
      ]
    },
    {
      "id": "ch3-integral-topic",
      "title": "The Lebesgue integral",
      "type": "topic",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>First integrate nonnegative measurable functions by taking suprema over simple lower approximations. Define a signed integral through positive and negative parts when their difference is meaningful. Null-set changes do not affect the result.</p>",
      "intuition": "<p>This construction extends elementary area while allowing unbounded functions, complicated level sets, and infinite values.</p>",
      "example": "<p>For \\(f=\\mathbf1_{\\mathbb Q\\cap[0,1]}\\), the Lebesgue integral is zero although the Riemann integral does not exist.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "The Lebesgue integral",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-nonnegative-integral",
      "title": "Integral of a nonnegative function",
      "type": "definition",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(f:\\mathbb R^d\\to[0,\\infty]\\), \\[\\int f\\,dx=\\sup\\left\\{\\int\\phi\\,dx:\\phi\\in\\mathcal S,\\ 0\\le\\phi\\le f\\right\\}.\\] The value lies in \\([0,\\infty]\\).</p>",
      "intuition": "<p>Every simple function below the graph captures some of its area. Take the largest area obtainable by such approximations.</p>",
      "example": "<p>For measurable \\(E\\), this gives \\(\\int\\mathbf1_E\\,dx=m(E)\\), including infinite measure.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "The Lebesgue integral",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.5"
      ]
    },
    {
      "id": "ch3-signed-integral",
      "title": "Signed integral and summability",
      "type": "definition",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Write \\(f=f^+-f^-\\). If at least one of \\(\\int f^+\\), \\(\\int f^-\\) is finite, define \\(\\int f=\\int f^+-\\int f^-\\). A measurable \\(f\\) is summable when \\(\\int|f|&lt;\\infty\\); then both parts are finite.</p>",
      "intuition": "<p>Positive and negative mass must be controlled separately. Infinite masses cannot simply be cancelled to assign an integral.</p>",
      "example": "<p>The function \\(f(x)=x\\) on \\([-1,1]\\) is summable and has integral zero. The same function on all of \\(\\mathbb R\\) has two infinite parts, so its signed Lebesgue integral is undefined.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "The Lebesgue integral",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "correction": "The handwritten sentence introducing the signed integral is incomplete; the transcription supplies the finiteness condition that rules out infinity minus infinity.",
      "coverage": "current",
      "oralQuestions": [
        "3.5"
      ]
    },
    {
      "id": "ch3-integral-over-set",
      "title": "Integral over a measurable set",
      "type": "definition",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(E\\), define \\(\\int_E f\\,dx=\\int f\\mathbf1_E\\,dx\\) whenever this is defined. Equivalently, extend a function on \\(E\\) by zero outside \\(E\\). For disjoint \\(B,C\\), \\(\\int_{B\\cup C}f=\\int_Bf+\\int_Cf\\) whenever the expressions are defined.</p>",
      "intuition": "<p>The indicator switches off the part of the function outside the chosen region. Disjoint regions partition the contribution to the integral.</p>",
      "example": "<p>For \\(f(x)=x\\), \\(\\int_{[0,2]}f=\\int_{[0,1]}f+\\int_{(1,2]}f=1/2+3/2=2\\).</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "The Lebesgue integral",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-integral-properties",
      "title": "Linearity, monotonicity and absolute bound",
      "type": "proposition",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For summable real \\(f,g\\) and \\(a,b\\in\\mathbb R\\), \\(\\int(af+bg)=a\\int f+b\\int g\\). If \\(f\\le g\\) a.e., then \\(\\int f\\le\\int g\\). Also \\(|\\int f|\\le\\int|f|\\). For nonnegative \\(f\\) and measurable \\(E\\subseteq F\\), \\(\\int_E f\\le\\int_F f\\).</p>",
      "intuition": "<p>Integration respects linear combinations and order. Cancellation may reduce the signed total, but cannot exceed the total absolute mass.</p>",
      "example": "<p>On \\([-1,1]\\), \\(|\\int x\\,dx|=0\\le\\int|x|\\,dx=1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Integral properties and Markov's inequality",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>For nonnegative functions, choose increasing simple approximations. Linearity for simple functions follows by refining their level-set partitions; monotone convergence then passes addition and nonnegative scalar multiplication to the limit. For summable signed functions, split each into positive and negative parts. All resulting integrals are finite, so rearranging them proves full real linearity without any \\(\\infty-\\infty\\).</p><p>Monotonicity follows directly from the inclusion of admissible simple lower approximations, after ignoring null exceptional sets. Apply it to \\(-|f|\\le f\\le|f|\\) to obtain \\(|\\int f|\\le\\int|f|\\). Finally \\(0\\le f\\mathbf1_E\\le f\\mathbf1_F\\) proves monotonicity with respect to the integration region for nonnegative \\(f\\).</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-almost-everywhere",
      "title": "Almost everywhere and a.e. convergence",
      "type": "definition",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>A property holds almost everywhere on a measurable domain if it holds outside one null set. Measurable \\(f_n\\) converge to \\(f\\) a.e. when some null \\(N\\) satisfies \\(f_n(x)\\to f(x)\\) for every \\(x\\notin N\\).</p>",
      "intuition": "<p>Measure theory discards exceptions occupying zero volume. The exceptional set is fixed for the sequence, although it can be a countable union of individual exceptional sets.</p>",
      "example": "<p>On \\([0,1]\\), \\(f_n(x)=x^n\\) tends to zero everywhere except \\(x=1\\), so it converges to zero a.e.</p>",
      "lectures": [
        {
          "date": "2026-10-20",
          "heading": "Almost-everywhere convergence",
          "title": "RFA - 2026-10-20 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-null-integral",
      "title": "Null sets do not affect integrals",
      "type": "proposition",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(g\\ge0\\) is measurable and \\(N\\) is null, then \\(\\int_Ng\\,dx=0\\), even if \\(g=\\infty\\) there. Thus measurable functions equal a.e. have equal integrals whenever the signed integrals are defined.</p>",
      "intuition": "<p>The integral sees height multiplied by volume. Values on zero-volume sets never contribute, and a.e. modifications can simplify a proof.</p>",
      "example": "<p>Both the zero function and \\(\\mathbf1_{\\{0\\}}\\) have integral zero, although they are different pointwise functions.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Beppo Levi: monotone convergence",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Consider \\(g\\mathbf1_N\\), using the integration convention \\(0\\cdot\\infty=0\\). Every nonnegative simple function \\(\\phi\\le g\\mathbf1_N\\) has each of its positive level sets contained in \\(N\\). These sets have measure zero, so the finite weighted sum defining \\(\\int\\phi\\) is zero. Taking the supremum over all such simple lower approximations gives \\(\\int_Ng=0\\), regardless of how large \\(g\\) is on \\(N\\).</p><p>If two nonnegative functions agree off \\(N\\), split their integrals into the contribution off \\(N\\) and the zero contribution on \\(N\\). For signed functions apply the same reasoning to their positive and negative parts. The conclusion is valid whenever the signed integrals are defined.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-zero-on-every-set",
      "title": "Zero integral on every measurable set",
      "type": "proposition",
      "section": "3.4",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If measurable \\(f:\\mathbb R^d\\to\\overline{\\mathbb R}\\) satisfies \\(\\int_E f\\,dx=0\\) for every measurable \\(E\\), then \\(f=0\\) a.e.</p>",
      "intuition": "<p>A nonzero positive or negative part would be detected by integrating over a corresponding level set. Requiring all measurable sets prevents cancellation from hiding nonzero values.</p>",
      "example": "<p>The function \\(f(x)=x\\) on \\([-1,1]\\) has total integral zero, but \\(\\int_{(0,1)}f=1/2\\), so a single zero integral is insufficient.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Fubini's theorem",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "correction": "This is assigned as an exercise in the transcription. The handwritten proof outline is incomplete; the card states the exercise conclusion without claiming the source contains a complete proof.",
      "coverage": "current",
      "proofSketch": "<p>For \\(k\\ge1\\), let \\(A_k=\\{f\\ge1/k\\}\\), a measurable set. The hypothesis applies to this particular set, and monotonicity gives \\[0=\\int_{A_k}f\\,dx\\ge\\frac1k m(A_k).\\] Thus every \\(A_k\\) is null. Since \\(\\{f&gt;0\\}=\\bigcup_{k\\ge1}A_k\\), the positive set is null, including any points where \\(f=+\\infty\\).</p><p>Apply the same argument to \\(-f\\) on \\(B_k=\\{f\\le-1/k\\}\\). Each negative threshold set is null, and hence so is \\(\\{f&lt;0\\}\\). The union of the positive and negative sets is exactly where \\(f\\ne0\\), so \\(f=0\\) almost everywhere. Requiring every measurable set prevents cancellation between the two signs.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. The current source assigns the result as an exercise and leaves its proof outline incomplete.",
      "oralQuestions": []
    },
    {
      "id": "ch3-limits-topic",
      "title": "Limits and integration",
      "type": "topic",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Monotone convergence uses nonnegativity and increasing approximants. Fatou gives a one-sided bound for nonnegative sequences. Dominated convergence uses one integrable bound. Fubini controls changing the order of integration.</p>",
      "intuition": "<p>Pointwise information alone does not control total mass: it may concentrate into smaller regions or travel to infinity.</p>",
      "example": "<p>For \\(f_n=n\\mathbf1_{[0,1/n]}\\), the a.e. limit is zero but every integral equals one.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Beppo Levi: monotone convergence",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-monotone-convergence",
      "title": "Beppo Levi: monotone convergence",
      "type": "theorem",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If measurable \\(f_n\\ge0\\) satisfy \\(f_n\\le f_{n+1}\\) a.e. for every \\(n\\), then \\(f_n\\to f\\) a.e. for a measurable \\(f\\ge0\\), and \\[\\lim_n\\int f_n\\,dx=\\int f\\,dx.\\] Both sides may be infinite.</p>",
      "intuition": "<p>Increasing approximations cannot lose previously acquired mass. Their common exceptional set is null by countable subadditivity.</p>",
      "example": "<p>Let \\(f_n=\\mathbf1_{[0,n]}\\). Then \\(f_n\\uparrow\\mathbf1_{[0,\\infty)}\\) and the integrals tend to infinity.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Beppo Levi: monotone convergence",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "correction": "In the source proof, the sets {tφ < f_n} need cover only {φ>0}, not all of space. The current transcription corrects that intermediate assertion.",
      "coverage": "current",
      "proofSketch": "<p>Collect the exceptional sets for the inequalities into one null set and set all functions to zero there. Now \\(f_n\\uparrow f=\\sup_nf_n\\) everywhere, with \\(f\\) measurable. Monotonicity gives \\(L=\\lim_n\\int f_n\\le\\int f\\).</p><p>For the reverse inequality, fix a nonnegative simple \\(\\phi\\le f\\) of bounded support and \\(0&lt;t&lt;1\\). The sets \\(A_n=\\{\\phi&gt;0,\\ f_n&gt;t\\phi\\}\\) increase and exhaust \\(\\{\\phi&gt;0\\}\\), though they need not exhaust the whole domain. On \\(A_n\\), \\(f_n\\ge t\\phi\\). Apply continuity from below to each positive level set of \\(\\phi\\) to obtain \\(L\\ge t\\int\\phi\\). Let \\(t\\uparrow1\\), then take the supremum over admissible \\(\\phi\\). This gives \\(L\\ge\\int f\\), proving equality.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.6",
        "3.LF.3"
      ]
    },
    {
      "id": "ch3-markov",
      "title": "Markov’s inequality",
      "type": "theorem",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(f\\ge0\\) and \\(\\lambda&gt;0\\), \\[m(\\{f\\ge\\lambda\\})\\le\\frac1\\lambda\\int f\\,dx.\\]</p>",
      "intuition": "<p>Every point above height λ costs at least λ units of integrand. A finite integral therefore limits the size of a large-value region.</p>",
      "example": "<p>If \\(\\int f=3\\), then the set where \\(f\\ge10\\) has measure at most \\(3/10\\).</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Integral properties and Markov's inequality",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "correction": "The nonnegativity of f and positivity of λ are required and are made explicit in the transcription.",
      "coverage": "current",
      "proofSketch": "<p>Let \\(A=\\{f\\ge\\lambda\\}\\), which is measurable by the threshold test. Pointwise, \\(\\lambda\\mathbf1_A\\le f\\): on \\(A\\) this is the definition of the set, and outside \\(A\\) it follows from nonnegativity of \\(f\\). Integrating and using monotonicity yields \\[\\lambda m(A)=\\int\\lambda\\mathbf1_A\\,dx\\le\\int f\\,dx.\\]</p><p>Divide by the positive number \\(\\lambda\\). If the integral is infinite, the inequality remains true in the extended sense; when it is finite, the estimate gives a useful finite bound on the superlevel-set measure. Neither a.e. convergence nor any limiting argument is needed.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-fubini",
      "title": "Fubini’s theorem",
      "type": "theorem",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If measurable \\(f:\\mathbb R^{n+m}\\to\\mathbb R\\) is summable, its sections are summable for almost every parameter and \\[\\int_{\\mathbb R^{n+m}}f(x,y)\\,dx\\,dy=\\int_{\\mathbb R^m}\\!\\left(\\int_{\\mathbb R^n}f(x,y)\\,dx\\right)dy,\\] with the analogous reversed order. For measurable \\(f\\ge0\\), finiteness of a full or iterated integral guarantees summability and these equalities.</p>",
      "intuition": "<p>Absolute integrability prevents cancellation from making the answer depend on the order of summation through the continuum. Exceptional nonintegrable sections occur only for a null set of parameters.</p>",
      "example": "<p>On \\([0,1]^2\\), \\(f(x,y)=xy\\) has integral \\((\\int_0^1x\\,dx)(\\int_0^1y\\,dy)=1/4\\), in either order.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Fubini's theorem",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "correction": "The card follows the summable case and the stated nonnegative finite-integral case. It does not add an unrecorded general Tonelli theorem as separate official content.",
      "coverage": "current",
      "proofSketch": "<p>Use the nonnegative product-integration lemma (Tonelli) as the main tool. Its proof starts with rectangle indicators, extends to Borel sets by a monotone-class argument, and then to nonnegative functions by simple approximation and monotone convergence. Passing to Lebesgue completion uses the fact that a null subset of the product has null sections for almost every parameter.</p><p>Apply this lemma to \\(|f|\\). Since \\(\\int|f|&lt;\\infty\\), the section integral \\(\\int|f(x,y)|\\,dx\\) is finite for almost every \\(y\\). Apply the same lemma to \\(f^+\\) and \\(f^-\\); their integrals are finite, so subtraction is legitimate and gives Fubini's identity. Repeat in the reversed order. For nonnegative \\(f\\), Tonelli identifies all three integrals, possibly as infinity; if any one is finite, all are finite, yielding the stated summable case.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. Uses Tonelli and a monotone-class argument as supporting proof tools. The current notes state Fubini and the nonnegative finite-integral case; the archived notes explicitly omit the proof. This sketch does not add Tonelli as a separately taught card.",
      "oralQuestions": []
    },
    {
      "id": "ch3-fatou",
      "title": "Fatou’s lemma",
      "type": "theorem",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For nonnegative measurable \\(f_n\\), \\[\\int\\liminf_{n\\to\\infty}f_n\\,dx\\le\\liminf_{n\\to\\infty}\\int f_n\\,dx.\\] Infinite values are permitted.</p>",
      "intuition": "<p>The pointwise lower limiting profile cannot contain more mass than the lower limit of the total masses. The proof applies monotone convergence to the increasing tail infima.</p>",
      "example": "<p>For \\(f_n=\\mathbf1_{[n-1,n]}\\), the left side is zero and the right side is one, so the inequality can be strict.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Fatou's lemma",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Define the tail infima \\(g_n=\\inf_{k\\ge n}f_k\\). These functions are measurable and nonnegative, and \\(g_n\\uparrow\\liminf_kf_k\\). Monotone convergence therefore gives \\[\\int\\liminf_kf_k=\\lim_n\\int g_n.\\]</p><p>For every \\(k\\ge n\\), the pointwise inequality \\(g_n\\le f_k\\) implies \\(\\int g_n\\le\\int f_k\\). Taking the infimum over \\(k\\ge n\\), then the limit in \\(n\\), yields \\(\\lim_n\\int g_n\\le\\liminf_k\\int f_k\\), which is the desired bound. All quantities are nonnegative, so no subtraction of infinities occurs. Concentrating spikes or mass travelling to infinity explain why equality need not hold.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.7",
        "3.LF.4"
      ]
    },
    {
      "id": "ch3-dominated-convergence",
      "title": "Lebesgue dominated convergence",
      "type": "theorem",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Let measurable \\(f_n\\to f\\) a.e. Suppose there is one nonnegative summable \\(g\\) with \\(|f_n|\\le g\\) a.e. for every \\(n\\). Then \\(f\\) is summable and \\[\\int f\\,dx=\\lim_n\\int f_n\\,dx.\\]</p>",
      "intuition": "<p>A single integrable envelope prevents both concentration of mass and escape of mass. Apply Fatou to the nonnegative sequences \\(g-f_n\\) and \\(g+f_n\\).</p>",
      "example": "<p>On \\([0,1]\\), \\(f_n(x)=x^n\\to0\\) a.e. and \\(|f_n|\\le1\\). Since the domain has finite measure, the envelope is integrable and \\(\\int_0^1x^n\\,dx=1/(n+1)\\to0\\).</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Lebesgue's dominated convergence theorem",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "correction": "The transcription corrects the source sign: liminf(g−f_n)=g−limsup(f_n), wherever g is finite. Integrability makes g finite a.e.",
      "coverage": "current",
      "proofSketch": "<p>Outside one common null set, convergence holds, every bound \\(|f_n|\\le g\\) holds, and \\(g&lt;\\infty\\). Taking pointwise limits gives \\(|f|\\le g\\), so \\(f\\) and each \\(f_n\\) are summable.</p><p>Apply Fatou to the nonnegative functions \\(g+f_n\\): \\(\\int g+\\int f\\le\\int g+\\liminf_n\\int f_n\\). Cancelling the finite integral of \\(g\\) gives \\(\\int f\\le\\liminf_n\\int f_n\\). Apply Fatou again to \\(g-f_n\\); the sign reversal gives \\(\\int f\\ge\\limsup_n\\int f_n\\). Hence \\[\\int f\\le\\liminf_n\\int f_n\\le\\limsup_n\\int f_n\\le\\int f.\\] Both limiting bounds agree, proving convergence of the integrals.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.8",
        "3.LF.6"
      ]
    },
    {
      "id": "ch3-concentration",
      "title": "Concentration defeats integral convergence",
      "type": "proposition",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>The sequence \\(f_n=n\\mathbf1_{[0,1/n]}\\) on \\(\\mathbb R\\) converges to zero a.e., but \\(\\int f_n=1\\) for every \\(n\\). Thus a.e. convergence alone does not justify exchanging limit and integral.</p>",
      "intuition": "<p>The support shrinks while the height grows exactly enough to keep total area constant. Almost every fixed point eventually misses the spike.</p>",
      "example": "<p>Its \\(L^1\\) distance from zero stays one; at \\(x=0\\), \\(f_n(0)=n\\), so pointwise convergence to zero fails there.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Strict inequality: concentration",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "correction": "With the closed interval [0,1/n], convergence is a.e., not everywhere. The current transcription corrects the handwritten claim at zero.",
      "coverage": "current",
      "proofSketch": "<p>Fix \\(x\\ne0\\). If \\(x&lt;0\\), every term vanishes; if \\(x&gt;0\\), choose \\(n&gt;1/x\\), after which \\(x\\notin[0,1/n]\\). Thus \\(f_n(x)\\to0\\) outside \\(\\{0\\}\\). At zero, however, \\(f_n(0)=n\\), so convergence to zero is only almost everywhere.</p><p>Each graph is a rectangle of height \\(n\\) and width \\(1/n\\), giving \\(\\int f_n=1\\). The limit function has integral zero. Therefore the interchange fails even though the exceptional set is null. In particular no single integrable function can dominate all the spikes: dominated convergence would otherwise force these integrals to tend to zero.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.5"
      ]
    },
    {
      "id": "ch3-travelling-mass",
      "title": "Travelling mass defeats integral convergence",
      "type": "proposition",
      "section": "3.5",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>The sequence \\(f_n=\\mathbf1_{[n-1,n]}\\) on \\(\\mathbb R\\) converges to zero pointwise, while \\(\\int f_n=1\\) and \\(\\sup_x|f_n(x)|=1\\) for every \\(n\\).</p>",
      "intuition": "<p>At every fixed point the mass eventually disappears, but it has moved elsewhere rather than vanished. There is no common integrable envelope.</p>",
      "example": "<p>The constant envelope one bounds every function but is not integrable on \\(\\mathbb R\\), so it cannot be used in dominated convergence.</p>",
      "lectures": [
        {
          "date": "2026-10-21",
          "heading": "Strict inequality: travelling wave",
          "title": "RFA - 2026-10-21 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>For any fixed real \\(x\\), once \\(n&gt;x+1\\) the interval \\([n-1,n]\\) lies to its right. Hence \\(f_n(x)=0\\) eventually, proving pointwise convergence to zero at every point. Each interval nevertheless has length one, so \\(\\int f_n=1\\), and each function takes the value one, so its supremum is one.</p><p>The mass is escaping spatially rather than decreasing. A constant envelope of height one is not integrable on \\(\\mathbb R\\). Indeed, any nonnegative common a.e. envelope must be at least one on the union \\([0,\\infty)\\), after collecting the countably many exceptional sets, so it cannot have finite integral.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.5"
      ]
    },
    {
      "id": "ch3-inequalities-topic",
      "title": "Integral norms and inequalities",
      "type": "topic",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For finite \\(p\\), the \\(L^p\\) quantity is \\((\\int|f|^p)^{1/p}\\). For \\(p=\\infty\\), use the essential supremum. Hölder controls products and Minkowski supplies the triangle inequality.</p>",
      "intuition": "<p>The exponent chooses how strongly large values are penalized. At this stage the quantities ignore null-set changes, so a quotient is needed for a genuine norm.</p>",
      "example": "<p>The nonzero pointwise function \\(\\mathbf1_{\\{0\\}}\\) has quantity zero for every \\(1\\le p\\le\\infty\\).</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "The $L^p$ quantity and essential supremum",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-lp-quantity",
      "title": "Finite-p integral quantity",
      "type": "definition",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(\\Omega\\subset\\mathbb R^d\\), measurable real or complex \\(f\\), and \\(1\\le p&lt;\\infty\\), \\[\\|f\\|_{L^p(\\Omega)}=\\left(\\int_\\Omega|f|^p\\,dx\\right)^{1/p}\\in[0,\\infty].\\]</p>",
      "intuition": "<p>Raise the error to a power, measure its total amount, then restore the original units by taking a root. Finiteness is required before placing a function in the space.</p>",
      "example": "<p>For measurable \\(E\\subseteq\\Omega\\), \\(\\|\\mathbf1_E\\|_p=m(E)^{1/p}\\). On \\((0,1)\\), \\(x^{-\\alpha}\\) belongs to finite \\(L^p\\) exactly when \\(\\alpha p&lt;1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "The $L^p$ quantity and essential supremum",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.9"
      ]
    },
    {
      "id": "ch3-essential-supremum",
      "title": "Essential supremum",
      "type": "definition",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(f\\), \\[\\|f\\|_{L^\\infty(\\Omega)}=\\inf\\{M\\ge0:|f|\\le M\\text{ a.e. on }\\Omega\\},\\] with \\(\\inf\\varnothing=\\infty\\). It never exceeds the pointwise supremum of \\(|f|\\).</p>",
      "intuition": "<p>Essential boundedness ignores spikes confined to null sets, but a small positive-measure region still counts.</p>",
      "example": "<p>For \\(f=\\mathbf1_{\\{0\\}}\\) on \\(\\mathbb R\\), the pointwise supremum is one while the essential supremum is zero.</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "The $L^p$ quantity and essential supremum",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "correction": "Restricting upper bounds to M≥0 makes the definition give zero on a null domain; the source originally allowed all real bounds.",
      "coverage": "current",
      "oralQuestions": [
        "3.9",
        "3.10"
      ]
    },
    {
      "id": "ch3-essential-bound",
      "title": "The essential supremum is an essential bound",
      "type": "proposition",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(M=\\|f\\|_{L^\\infty}&lt;\\infty\\), then \\(|f|\\le M\\) a.e. Thus the infimum in the definition is attained as an essential upper bound.</p>",
      "intuition": "<p>Each slightly larger bound \\(M+1/k\\) may fail on its own null set. Their countable union is still null, leaving every bound valid simultaneously.</p>",
      "example": "<p>On \\((0,1)\\), \\(f(x)=x\\) has essential supremum one and is bounded by one everywhere, although it never attains the value one.</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "The essential supremum is itself an essential upper bound",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "correction": "Attaining the minimum of the set of essential bounds does not mean f attains a pointwise maximum. The transcription also corrects the direction of the source set inclusions.",
      "coverage": "current",
      "proofSketch": "<p>Let \\(C\\) be the set of nonnegative essential upper bounds, and \\(M=\\inf C&lt;\\infty\\). For each \\(k\\), the definition of infimum gives some \\(c_k\\in C\\) with \\(c_k&lt;M+1/k\\). Since larger bounds are also essential bounds, \\(M+1/k\\) belongs to \\(C\\).</p><p>Choose a null set \\(N_k\\) outside which \\(|f|\\le M+1/k\\). The union \\(N=\\bigcup_kN_k\\) is null. At every point outside \\(N\\), all these inequalities hold simultaneously, so letting \\(k\\to\\infty\\) gives \\(|f|\\le M\\). Thus \\(M\\) itself is an admissible essential upper bound. This says nothing about whether a point actually attains the value \\(M\\).</p><p>Every pointwise upper bound for \\(|f|\\) is also an essential upper bound. Thus, if \\(S=\\sup_{x\\in\\Omega}|f(x)|&lt;\\infty\\), then \\(|f|\\le S\\) everywhere and \\(S\\) is admissible in the essential-bound infimum. Hence \\(\\|f\\|_{L^\\infty}\\le\\|f\\|_\\infty\\). If the pointwise supremum is infinite, the inequality is immediate.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.10"
      ]
    },
    {
      "id": "ch3-continuous-essential",
      "title": "Continuous functions: supremum equals essential supremum",
      "type": "proposition",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For continuous \\(f:\\Omega\\to\\mathbb R\\) on a nonempty open \\(\\Omega\\subset\\mathbb R^d\\), \\[\\sup_{x\\in\\Omega}|f(x)|=\\operatorname*{ess\\,sup}_{x\\in\\Omega}|f(x)|,\\] allowing infinity.</p>",
      "intuition": "<p>If the value exceeds a proposed essential bound at one point, continuity preserves the excess in a small open ball of positive measure.</p>",
      "example": "<p>The singleton domain \\(\\Omega=\\{0\\}\\) shows why the domain assumption matters: \\(f(0)=1\\) is continuous there but has essential supremum zero.</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "The $L^p$ quantity and essential supremum",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "correction": "The source does not specify the domain; the current transcription requires an open Euclidean domain, matching the positive-measure-neighbourhood hint. The source presents this as an exercise.",
      "coverage": "current",
      "proofSketch": "<p>Every pointwise upper bound is an essential upper bound, so the essential supremum cannot exceed the ordinary supremum. To prove the reverse, suppose a finite essential upper bound \\(M\\) were smaller than \\(|f(x_0)|\\) at some point \\(x_0\\in\\Omega\\).</p><p>Choose \\(a\\) strictly between those values. By continuity and openness of \\(\\Omega\\), some Euclidean ball around \\(x_0\\), contained in \\(\\Omega\\), satisfies \\(|f|&gt;a&gt;M\\). This ball has positive Lebesgue measure, contradicting the a.e. upper bound. Hence every finite essential upper bound bounds \\(f\\) everywhere. Taking infima proves equality. If the ordinary supremum is infinite, the same argument rules out every finite essential bound.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. The source presents this as an exercise. The open-domain condition is essential to the positive-measure-ball step.",
      "oralQuestions": []
    },
    {
      "id": "ch3-holder",
      "title": "Integral Hölder inequality",
      "type": "theorem",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(p,q\\in[1,\\infty]\\) satisfy \\(1/p+1/q=1\\), and \\(f\\in L^p(\\Omega)\\), \\(g\\in L^q(\\Omega)\\), then \\(fg\\in L^1(\\Omega)\\) and \\[\\|fg\\|_1\\le\\|f\\|_p\\|g\\|_q.\\] The endpoints use \\(1/\\infty=0\\).</p>",
      "intuition": "<p>Complementary exponents balance the two factors. For interior exponents use scaled Young inequality; at an endpoint one factor is bounded a.e.</p>",
      "example": "<p>At \\(p=q=2\\), \\(|\\int fg|\\le\\|f\\|_2\\|g\\|_2\\). On a finite-measure set, setting \\(g=1\\) gives \\(\\|f\\|_1\\le m(\\Omega)^{1-1/p}\\|f\\|_p\\).</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "Hölder's inequality",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>For \\(1&lt;p,q&lt;\\infty\\), first assume both norms are nonzero and set \\(F=|f|/\\|f\\|_p\\), \\(G=|g|/\\|g\\|_q\\). Young's inequality gives \\(FG\\le F^p/p+G^q/q\\). Integrating yields \\(\\int FG\\le1/p+1/q=1\\), proving both integrability of the product and the desired bound after restoring the norms.</p><p>If one norm is zero, that factor vanishes a.e., so the product vanishes a.e. and the result is immediate. At the endpoint \\(p=1,q=\\infty\\), the essential-bound property gives \\(|fg|\\le\\|g\\|_\\infty|f|\\) a.e.; integration proves the estimate. Interchange the factors for the other endpoint. Absolute values make the same argument valid for complex functions.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.11",
        "3.LF.7"
      ]
    },
    {
      "id": "ch3-weighted-product",
      "title": "Weighted product estimate",
      "type": "proposition",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If \\(\\alpha,\\beta&gt;0\\), \\(\\alpha+\\beta=1\\), and \\(f,g\\in L^1(\\Omega)\\), then \\[\\int_\\Omega|f|^\\alpha|g|^\\beta\\,dx\\le\\left(\\int_\\Omega|f|\\right)^\\alpha\\left(\\int_\\Omega|g|\\right)^\\beta.\\]</p>",
      "intuition": "<p>Apply Hölder to the powers using conjugate exponents \\(1/\\alpha\\) and \\(1/\\beta\\). The resulting powers inside the two integrals return to one.</p>",
      "example": "<p>With \\(\\alpha=\\beta=1/2\\), \\(\\int\\sqrt{|fg|}\\le\\sqrt{\\|f\\|_1\\|g\\|_1}\\).</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "Interior case: scaled Young inequality",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "correction": "This estimate is assigned as homework in the current lecture. The card does not claim that its proof is transcribed.",
      "coverage": "current",
      "proofSketch": "<p>Set \\(p=1/\\alpha\\) and \\(q=1/\\beta\\). Positivity and \\(\\alpha+\\beta=1\\) imply \\(p,q&gt;1\\) and \\(1/p+1/q=1\\). Apply Hölder to \\(F=|f|^\\alpha\\) and \\(G=|g|^\\beta\\).</p><p>The powers were chosen so that \\(F^p=|f|\\) and \\(G^q=|g|\\), which are integrable. Thus \\(\\|F\\|_p=(\\int|f|)^\\alpha\\) and \\(\\|G\\|_q=(\\int|g|)^\\beta\\). Substitution into \\(\\int FG\\le\\|F\\|_p\\|G\\|_q\\) gives the stated inequality exactly. If either integral is zero, the corresponding function vanishes a.e., so both sides behave consistently. No pointwise bound on the original functions is required.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. This is assigned homework in the current lecture; the displayed proof is an AI-authored solution sketch.",
      "oralQuestions": []
    },
    {
      "id": "ch3-minkowski",
      "title": "Integral Minkowski inequality",
      "type": "theorem",
      "section": "3.6",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For \\(1\\le p\\le\\infty\\) and \\(f,g\\in L^p(\\Omega)\\), \\(f+g\\in L^p(\\Omega)\\) and \\[\\|f+g\\|_p\\le\\|f\\|_p+\\|g\\|_p.\\]</p>",
      "intuition": "<p>This is the triangle inequality for integral size. The interior-exponent proof uses Hölder on terms involving \\(|f+g|^{p-1}\\), after first checking finiteness.</p>",
      "example": "<p>For disjoint unit-length sets \\(A,B\\), \\(\\|\\mathbf1_A+\\mathbf1_B\\|_2=\\sqrt2\\le1+1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "Minkowski's inequality",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>The endpoints are immediate: integrate \\(|f+g|\\le|f|+|g|\\) for \\(p=1\\), and add a.e. essential bounds for \\(p=\\infty\\). For \\(1&lt;p&lt;\\infty\\), first ensure finiteness using \\(|f+g|^p\\le2^{p-1}(|f|^p+|g|^p)\\).</p><p>Let \\(h=f+g\\) and \\(q=p/(p-1)\\). Then \\[\\|h\\|_p^p\\le\\int |f||h|^{p-1}+\\int |g||h|^{p-1}.\\] Hölder bounds the right side by \\((\\|f\\|_p+\\|g\\|_p)\\||h|^{p-1}\\|_q\\). Since \\((p-1)q=p\\), the final norm is \\(\\|h\\|_p^{p-1}\\). If \\(\\|h\\|_p=0\\), there is nothing to prove; otherwise divide by this positive finite power to obtain the triangle inequality.</p><p>To complete the linear-space argument, the zero function has finite norm and scalar multiplication satisfies \\(\\|af\\|_p=|a|\\|f\\|_p\\) for every finite scalar \\(a\\), including \\(p=\\infty\\). Together with the addition estimate, this shows that the measurable functions of finite \\(L^p\\) size form a vector space. Passing to a.e. equivalence classes makes the norm definite.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.12",
        "3.LF.8"
      ]
    },
    {
      "id": "ch3-banach-topic",
      "title": "Lᵖ as a Banach space",
      "type": "topic",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>The elements of \\(L^p\\) are equivalence classes under equality almost everywhere. The integral quantity becomes a norm on these classes; Riesz–Fischer states completeness. Finite-p norm convergence need not give a.e. convergence of the full sequence.</p>",
      "intuition": "<p>Two pointwise representatives can encode the same measurable information. Completeness concerns the norm topology, so its conclusion must not be silently strengthened to pointwise convergence.</p>",
      "example": "<p>The typewriter sequence converges to zero in every finite \\(L^p([0,1])\\) but has no pointwise limit as a full sequence.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Making the $L^p$ quantity a norm",
          "title": "RFA - 2026-10-26 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-equivalence-quotient",
      "title": "Equivalence classes and compatible quotient operations",
      "type": "definition",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>An equivalence relation is reflexive, symmetric and transitive. Set \\([x]=\\{y:y\\sim x\\}\\) and \\(X/{\\sim}=\\{[x]:x\\in X\\}\\). For a vector space, \\(a[x]+b[y]=[ax+by]\\) is well defined when \\(x\\sim x^{\\prime}\\), \\(y\\sim y^{\\prime}\\) imply \\(ax+by\\sim ax^{\\prime}+by^{\\prime}\\).</p>",
      "intuition": "<p>An equivalence class groups representations regarded as identical. Operations on classes must not depend on the selected representative.</p>",
      "example": "<p>Equality a.e. is compatible with linear combinations: outside the union of two null exceptional sets, corresponding representatives agree term by term.</p>",
      "lectures": [
        {
          "date": "2026-10-23",
          "heading": "Equivalence relations and quotient sets",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "correction": "An arbitrary equivalence relation does not give a quotient vector space. The current transcription supplies the compatibility hypothesis missing from the handwritten exercise.",
      "coverage": "current",
      "oralQuestions": [
        "3.13"
      ]
    },
    {
      "id": "ch3-lp-space",
      "title": "The space Lᵖ of a.e. classes",
      "type": "definition",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For measurable \\(E\\subset\\mathbb R^d\\), let \\(\\mathcal L^p(E)\\) consist of measurable finite-valued representatives with finite \\(L^p\\) quantity. For \\(1\\le p\\le\\infty\\), define \\(f\\sim g\\) iff \\(f=g\\) a.e., and \\(L^p(E)=\\mathcal L^p(E)/{\\sim}\\). Then \\(\\|[f]\\|_p=\\|f\\|_p\\) is a well-defined norm.</p>",
      "intuition": "<p>Null-set differences are exactly what makes strict positivity fail on pointwise functions. Quotienting makes every zero-norm representative the same zero element.</p>",
      "example": "<p>The functions zero and \\(\\mathbf1_{\\{0\\}}\\) represent the same element of \\(L^p(\\mathbb R)\\). Extended-valued representatives of finite norm may first be changed on a null set to become finite-valued.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Making the $L^p$ quantity a norm",
          "title": "RFA - 2026-10-26 - Class Notes"
        },
        {
          "date": "2026-10-23",
          "heading": "Constructing $L^p(\\Omega)$",
          "title": "RFA - 2026-10-23 - Class Notes"
        }
      ],
      "correction": "The finite-p integral and p=∞ essential-supremum formulas are distinct. The unclear source relation is interpreted as equality almost everywhere, consistently with23 October and the norm construction.",
      "coverage": "current",
      "oralQuestions": [
        "3.13"
      ]
    },
    {
      "id": "ch3-lp-convergence",
      "title": "Convergence in Lᵖ",
      "type": "definition",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For \\(f_n,f\\in L^p(E)\\), convergence in \\(L^p\\) means \\(\\|f_n-f\\|_p\\to0\\). For finite \\(p\\), this is equivalent to \\(\\int_E|f_n-f|^p\\to0\\); for \\(p=\\infty\\), use the essential supremum.</p>",
      "intuition": "<p>Norm convergence measures total error, or the largest error away from null sets. It is a statement about equivalence classes.</p>",
      "example": "<p>For finite \\(p\\), \\(f_n=\\mathbf1_{[0,1/n]}\\) on \\([0,1]\\) has \\(\\|f_n\\|_p=n^{-1/p}\\to0\\), whereas \\(\\|f_n\\|_{L^\\infty}=1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Making the $L^p$ quantity a norm",
          "title": "RFA - 2026-10-26 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": [
        "3.14"
      ]
    },
    {
      "id": "ch3-riesz-fischer",
      "title": "Riesz–Fischer theorem",
      "type": "theorem",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For every measurable \\(E\\subseteq\\mathbb R^d\\) and \\(1\\le p\\le\\infty\\), \\(L^p(E)\\) is Banach: every \\(L^p\\)-Cauchy sequence has a limit in \\(L^p(E)\\) with respect to that norm.</p>",
      "intuition": "<p>The function space contains the limits that its own norm predicts. This makes it suitable for constructing functions through approximation.</p>",
      "example": "<p>If \\(\\|f_n-f_m\\|_2\\to0\\) as \\(m,n\\to\\infty\\), some \\(f\\in L^2(E)\\) satisfies \\(\\|f_n-f\\|_2\\to0\\). The theorem does not require choosing a pointwise limit of the full sequence.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Riesz-Fischer and an almost-everywhere convergent subsequence",
          "title": "RFA - 2026-10-26 - Class Notes"
        }
      ],
      "correction": "Riesz–Fischer is stated on the26 October page. No proof is recorded there; this card supplies an explanatory interpretation, not a source proof.",
      "coverage": "current",
      "proofSketch": "<p>For finite \\(p\\), select a subsequence with increments \\(d_k=f_{n_{k+1}}-f_{n_k}\\) satisfying \\(\\|d_k\\|_p\\le2^{-k}\\). Minkowski bounds the norms of \\(|f_{n_1}|+\\sum_{k\\le N}|d_k|\\) uniformly; Fatou shows their increasing limit \\(h\\) belongs to \\(L^p\\), hence is finite a.e. The telescoping series therefore converges absolutely a.e. to a measurable \\(f\\), with \\(|f|\\le h\\).</p><p>Its tails satisfy \\(\\|f-f_{n_m}\\|_p\\le\\sum_{k\\ge m}2^{-k}\\to0\\), again by Minkowski and Fatou. The Cauchy property and triangle inequality extend convergence to the full sequence. For \\(p=\\infty\\), choose the same small increments and remove one countable union of exceptional null sets. Their pointwise bounds make the telescoping series converge uniformly there to an essentially bounded limit; the same tail estimate and Cauchy argument finish.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. Both the personal transcription and the archived theorem state completeness without a proof. This is a supplementary study proof.",
      "oralQuestions": [
        "3.15"
      ]
    },
    {
      "id": "ch3-ae-subsequence",
      "title": "Dominated a.e.-convergent subsequence",
      "type": "theorem",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For \\(1\\le p&lt;\\infty\\), an \\(L^p(E)\\)-Cauchy sequence has a subsequence \\(f_{n_k}\\) and \\(f,h\\in L^p(E)\\), with \\(h\\ge0\\), such that \\(f_{n_k}\\to f\\) a.e. and \\(|f_{n_k}|\\le h\\) a.e. for every \\(k\\).</p>",
      "intuition": "<p>Completeness has a stronger subsequence companion. Here boundedness means one pointwise dominating \\(L^p\\) function, not merely a bound on the numbers \\(\\|f_{n_k}\\|_p\\).</p>",
      "example": "<p>From a norm-convergent sequence, one can select successive errors small enough to be summable. This explains why a carefully chosen subsequence can behave better pointwise than the original sequence.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Riesz-Fischer and an almost-everywhere convergent subsequence",
          "title": "RFA - 2026-10-26 - Class Notes"
        }
      ],
      "correction": "This strengthened finite-p statement is recorded with Riesz–Fischer but without a proof. Its example is an AI-authored explanation of the selection idea.",
      "coverage": "current",
      "proofSketch": "<p>Use the Cauchy property to choose increasing indices \\(n_k\\) with \\(\\|f_{n_{k+1}}-f_{n_k}\\|_p\\le2^{-k}\\). Write these differences as \\(d_k\\), and let \\(h_N=|f_{n_1}|+\\sum_{k=1}^N|d_k|\\). Minkowski gives \\(\\|h_N\\|_p\\le\\|f_{n_1}\\|_p+1\\), uniformly in \\(N\\).</p><p>The functions \\(h_N\\) increase to \\(h\\). Fatou applied to \\(h_N^p\\) gives \\(h\\in L^p\\), so \\(h&lt;\\infty\\) a.e. At every such point the series of increments converges absolutely, producing a limit \\(f\\). Telescoping shows \\(|f_{n_k}|\\le h\\) and \\(|f|\\le h\\); hence \\(f\\in L^p\\). This constructs both the a.e.-convergent subsequence and its single dominating function, not merely bounded norms.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class. The strengthened finite-p result is recorded without proof. The summable-increments construction supplies the supplementary argument.",
      "oralQuestions": [
        "3.15",
        "3.LF.9"
      ]
    },
    {
      "id": "ch3-typewriter",
      "title": "The typewriter sequence",
      "type": "proposition",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For each \\(k\\ge1\\), list \\(\\mathbf1_{[j2^{-k},(j+1)2^{-k}]}\\), \\(j=0,\\ldots,2^k-1\\), then advance to the next block. For finite \\(p\\), every term in block \\(k\\) has norm \\(2^{-k/p}\\to0\\). At every point of \\([0,1]\\), the full sequence takes both zero and one infinitely often, hence has no pointwise limit.</p>",
      "intuition": "<p>The error region becomes tiny but repeatedly sweeps over every point. Integral size decreases without stabilizing any pointwise value.</p>",
      "example": "<p>Its \\(L^\\infty\\) norms stay one. Choosing only the first interval from each block gives a subsequence converging to zero outside the null point \\(0\\).</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "A Cauchy sequence need not converge pointwise: the typewriter example",
          "title": "RFA - 2026-10-26 - Class Notes"
        }
      ],
      "correction": "The transcription repairs the handwritten block indexing. Endpoint overlaps affect only a null set. The source phrase “no conv. seq.” refers to the full pointwise sequence, not to absence of an Lp limit.",
      "coverage": "current",
      "proofSketch": "<p>Every interval in block \\(k\\) has length \\(2^{-k}\\). The integral of its indicator's \\(p\\)-th power is therefore \\(2^{-k}\\), so the \\(L^p\\) norm is \\(2^{-k/p}\\). Each block is finite, and their indices tend to infinity, proving norm convergence to zero for each finite \\(p\\).</p><p>Fix \\(x\\in[0,1]\\). In every block, at least one interval contains \\(x\\), giving infinitely many values one. In all sufficiently large blocks, other intervals exclude \\(x\\), giving infinitely many values zero. Closed endpoint overlaps can put a point in two intervals but cannot remove the infinitely many zeros. Thus no pointwise limit exists anywhere. Every interval has positive measure, so every \\(L^\\infty\\) norm remains one.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.9"
      ]
    },
    {
      "id": "ch3-convergence-comparison",
      "title": "Comparing modes of convergence",
      "type": "proposition",
      "section": "3.7",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Uniform convergence of measurable representatives implies pointwise convergence and makes the essential-supremum error tend to zero. If the functions and limit belong to \\(L^\\infty\\), this is convergence in \\(L^\\infty\\). Finite-p norm convergence and a.e. convergence do not imply each other in general. On an infinite-measure domain, \\(L^\\infty\\) convergence alone need not imply finite-p convergence.</p>",
      "intuition": "<p>Each mode controls a different feature: every point, every point except a null set, average powered error, or essential maximal error. There is no unconditional single ordering.</p>",
      "example": "<p>Typewriter functions disprove finite-p norm ⇒ a.e. convergence. The concentrating sequence \\(n\\mathbf1_{[0,1/n]}\\) disproves a.e. ⇒ \\(L^1\\) convergence.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Comparing notions of convergence",
          "title": "RFA - 2026-10-26 - Class Notes"
        }
      ],
      "correction": "The source labels L∞ convergence “strongest”; the transcription explains why the modes cannot be arranged in one unconditional order. The later review-only shrinking-transition example is not used as official coverage.",
      "coverage": "current",
      "proofSketch": "<p>For any fixed input, the error is bounded by its pointwise supremum, and its essential supremum is no larger. Thus uniform convergence implies pointwise convergence and vanishing essential-supremum error; calling this \\(L^\\infty\\) convergence additionally requires membership in that space.</p><p>The typewriter sequence has finite-p norms tending to zero but no a.e. limit. Conversely, the travelling indicators \\(\\mathbf1_{[n-1,n]}\\) converge everywhere to zero while every finite-p norm equals one. Finally, fix finite \\(p\\) and take \\(u_n=n^{-1/p}\\mathbf1_{[0,n]}\\) on \\(\\mathbb R\\). Each belongs to \\(L^p\\cap L^\\infty\\), and \\(\\|u_n\\|_\\infty\\to0\\), but \\(\\|u_n\\|_p=1\\). This proves the infinite-measure caveat even when every function belongs to both spaces.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.9"
      ]
    },
    {
      "id": "ch3-geometry-topic",
      "title": "Distance functions and compact buffers",
      "type": "topic",
      "section": "3.8",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>Distance functions place a compact neighbourhood around a compact set inside an open domain. This provides geometric preparation for continuous cutoffs and approximation.</p>",
      "intuition": "<p>A compact set inside an open domain has a uniform positive margin from the boundary. The current personal notes end at this buffer construction.</p>",
      "example": "<p>For \\(K=[-1,1]\\subset\\Omega=(-2,2)\\), the closed \\(\\delta\\)-neighbourhood remains inside \\(\\Omega\\) whenever \\(0&lt;\\delta&lt;1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Distance functions and compact neighbourhoods",
          "title": "RFA - 2026-10-26 - Class Notes"
        },
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Compact neighbourhoods and Urysohn's lemma"
        }
      ],
      "correction": "Chapter 3 personal notes are incomplete. No general density theorem or later continuation is claimed here.",
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-set-distance",
      "title": "Distance between sets",
      "type": "definition",
      "section": "3.8",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For nonempty \\(A,B\\subseteq\\mathbb R^d\\), define \\(d(x,A)=\\inf_{a\\in A}\\|x-a\\|\\) and \\(d(A,B)=\\inf_{a\\in A,b\\in B}\\|a-b\\|\\). Then \\(d(A,B)=d(B,A)\\).</p>",
      "intuition": "<p>Distance between sets is their closest possible separation. The infimum need not be attained, and disjoint sets need not have positive distance.</p>",
      "example": "<p>The disjoint sets \\(A=\\{0\\}\\), \\(B=(0,1)\\) have distance zero. The failure is possible because \\(B\\) is not closed.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Distance functions and compact neighbourhoods",
          "title": "RFA - 2026-10-26 - Class Notes"
        }
      ],
      "coverage": "current",
      "oralQuestions": []
    },
    {
      "id": "ch3-distance-lipschitz",
      "title": "Distance to a set is 1-Lipschitz",
      "type": "theorem",
      "section": "3.8",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For nonempty \\(A\\subseteq\\mathbb R^d\\), \\[|d(x,A)-d(y,A)|\\le\\|x-y\\|.\\] In particular, the distance function is continuous.</p>",
      "intuition": "<p>Moving the observation point by a distance r can change the best distance to the target set by at most r. Apply the triangle inequality, then take infima.</p>",
      "example": "<p>For \\(A=[-1,1]\\subset\\mathbb R\\), \\(d(x,A)=\\max\\{|x|-1,0\\}\\), a continuous function with slope magnitude at most one.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Distance functions and compact neighbourhoods",
          "title": "RFA - 2026-10-26 - Class Notes"
        },
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Compact neighbourhoods and Urysohn's lemma"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Fix \\(x,y\\) and \\(\\varepsilon&gt;0\\). By the definition of infimum, choose \\(a\\in A\\) with \\(\\|y-a\\|&lt;d(y,A)+\\varepsilon\\). This is possible because \\(A\\) is nonempty and its distance from \\(y\\) is finite. The triangle inequality gives \\[d(x,A)\\le\\|x-a\\|\\le\\|x-y\\|+\\|y-a\\|&lt;\\|x-y\\|+d(y,A)+\\varepsilon.\\]</p><p>Let \\(\\varepsilon\\downarrow0\\), obtaining \\(d(x,A)-d(y,A)\\le\\|x-y\\|\\). Reverse \\(x\\) and \\(y\\) to obtain the opposite difference bound. Together these yield the absolute-value inequality and therefore continuity. No nearest point needs to exist, and neither closedness nor compactness of \\(A\\) is required.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": [
        "3.LF.10"
      ]
    },
    {
      "id": "ch3-positive-separation",
      "title": "Compact–closed positive separation",
      "type": "theorem",
      "section": "3.8",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>If nonempty \\(K\\subset\\mathbb R^d\\) is compact, nonempty \\(C\\subset\\mathbb R^d\\) is closed, and \\(K\\cap C=\\varnothing\\), then \\(d(K,C)&gt;0\\).</p>",
      "intuition": "<p>The continuous function \\(x\\mapsto d(x,C)\\) attains a minimum on \\(K\\). Closedness of \\(C\\) makes it strictly positive at every point of \\(K\\), so the attained minimum is positive.</p>",
      "example": "<p>For \\(K=[0,1]\\) and \\(C=[2,\\infty)\\), the distance is one. Disjoint closed sets without compactness can have distance zero.</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Distance functions and compact neighbourhoods",
          "title": "RFA - 2026-10-26 - Class Notes"
        },
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Compact neighbourhoods and Urysohn's lemma"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>Because \\(C\\) is closed, \\(d(x,C)=0\\) would imply \\(x\\in C\\): choose points of \\(C\\) at distance tending to zero from \\(x\\), then use closedness. Thus \\(d(x,C)&gt;0\\) for every \\(x\\in K\\), since the sets are disjoint.</p><p>The distance function is continuous by its 1-Lipschitz estimate. On nonempty compact \\(K\\), it attains a minimum at some \\(x_*\\in K\\). That minimum is positive by the previous step, and it equals \\(d(K,C)\\). Compactness is what turns pointwise positivity into one uniform positive lower bound; positivity at each point alone would not prevent an infimum of zero on a noncompact set.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-compact-buffer",
      "title": "Compact neighbourhood inside an open set",
      "type": "proposition",
      "section": "3.8",
      "chapter": "3",
      "reference": "Current lecture result",
      "page": null,
      "referenceRole": "current-lecture",
      "sourceKind": "current-transcription",
      "authorship": "Precise statements adapted from current transcribed lectures; intuition and examples AI-authored.",
      "precise": "<p>For nonempty compact \\(K\\subset\\Omega\\subseteq\\mathbb R^d\\), with \\(\\Omega\\) open, set \\(K_\\delta=\\{x:d(x,K)\\le\\delta\\}\\). If \\(\\Omega\\ne\\mathbb R^d\\), choose \\(0&lt;\\delta&lt;d(K,\\mathbb R^d\\setminus\\Omega)\\). Then \\(K_\\delta\\) is compact and \\(K\\subseteq K_\\delta^\\circ\\subseteq K_\\delta\\subseteq\\Omega\\). If \\(\\Omega=\\mathbb R^d\\), any finite \\(\\delta&gt;0\\) works.</p>",
      "intuition": "<p>The margin to the complement gives room to thicken the set. Distance continuity gives closedness; boundedness and Heine–Borel then give compactness.</p>",
      "example": "<p>For \\(K=\\{0\\}\\subset B_2(0)\\), the closed unit ball is a compact buffer: choose \\(\\delta=1\\).</p>",
      "lectures": [
        {
          "date": "2026-10-26",
          "heading": "Distance functions and compact neighbourhoods",
          "title": "RFA - 2026-10-26 - Class Notes"
        },
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Compact neighbourhoods and Urysohn's lemma"
        }
      ],
      "coverage": "current",
      "proofSketch": "<p>If \\(\\Omega\\ne\\mathbb R^d\\), the complement is nonempty and closed. Positive separation gives \\(\\delta_0=d(K,\\Omega^c)&gt;0\\). For \\(0&lt;\\delta&lt;\\delta_0\\), no point of \\(\\Omega^c\\) can belong to \\(K_\\delta\\), so \\(K_\\delta\\subseteq\\Omega\\). If \\(\\Omega=\\mathbb R^d\\), this restriction is unnecessary.</p><p>Continuity of the distance function makes \\(K_\\delta\\) closed. If \\(K\\subseteq B_R(0)\\), then \\(d(x,K)\\ge\\|x\\|-R\\), so \\(K_\\delta\\) is bounded; Heine–Borel makes it compact. For each \\(k\\in K\\), every point in \\(B_\\delta(k)\\) has distance less than \\(\\delta\\) from \\(K\\). Hence \\(B_\\delta(k)\\subseteq K_\\delta\\), proving \\(K\\subseteq K_\\delta^\\circ\\) and completing the inclusion chain.</p>",
      "proofNote": "AI-authored study sketch; not a claim that this proof was presented in class.",
      "oralQuestions": []
    },
    {
      "id": "ch3-measure-extras-topic",
      "title": "Further measure connections",
      "type": "topic",
      "section": "3.9",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.1–3.2",
        "label": "Sections 3.1–3.2",
        "page": 59
      },
      "reference": "Sections 3.1–3.2",
      "page": 59,
      "referenceRole": "primary-archive",
      "precise": "<p>Jordan subgraphs connect area to integration; Lebesgue regularity supplies small-gap compact/open approximations. Volume depends on ambient dimension, and not every subset of Euclidean space is measurable.</p>",
      "intuition": "<p>These connections explain both the power and the limits of the measure construction.</p>",
      "example": "<p>A line segment has positive one-dimensional length and zero two-dimensional area.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-subgraph-volume",
      "title": "Subgraph volume equals the Riemann integral",
      "type": "proposition",
      "section": "3.9",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.1",
        "label": "Example 3.3",
        "page": 59
      },
      "reference": "Example 3.3",
      "page": 59,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f:[a,b]\\to[0,\\infty)\\) is Riemann integrable, then \\(A_f=\\{(x,y):a\\le x\\le b,\\ 0\\le y\\le f(x)\\}\\) is Jordan measurable and \\(m_{PJ}(A_f)=\\int_a^b f(x)\\,dx\\).</p>",
      "intuition": "<p>Lower and upper step functions produce stacks of rectangles inside and outside the subgraph.</p>",
      "example": "<p>For \\(f(x)=x\\) on \\([0,1]\\), the triangular subgraph has area \\(1/2\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For any partition, lower rectangles lie inside the subgraph and upper rectangles cover it, apart from finitely many zero-area vertical boundaries. Riemann integrability makes their volume gap tend to zero, so Jordan inner and outer contents coincide with the integral.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-regularity-gap",
      "title": "Measurability by an arbitrarily small regularity gap",
      "type": "proposition",
      "section": "3.9",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.2",
        "label": "Exercise 3.7",
        "page": 60
      },
      "reference": "Exercise 3.7",
      "page": 60,
      "referenceRole": "primary-archive",
      "precise": "<p>A bounded \\(E\\subset\\mathbb R^d\\) is Lebesgue measurable iff for every \\(\\varepsilon&gt;0\\) there are compact \\(K\\subseteq E\\subseteq U\\), with \\(U\\) open, such that \\(m(U\\setminus K)&lt;\\varepsilon\\).</p>",
      "intuition": "<p>One pair of regular inner and outer approximations can trap all uncertain volume in a set as small as desired.</p>",
      "example": "<p>For \\(E=(0,1)\\), take \\(K=[\\delta,1-\\delta]\\) and \\(U=(-\\delta,1+\\delta)\\); the gap has length \\(4\\delta\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>If E is measurable, choose the inner and outer errors below ε/2 using regularity. Conversely, m_*(E)≥m(K) and m^*(E)≤m(U), so the gap between outer and inner measures is at most ε for every ε.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-jordan-lebesgue-agreement",
      "title": "Lebesgue measure extends Jordan measure",
      "type": "proposition",
      "section": "3.9",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.2",
        "label": "Exercise 3.8",
        "page": 60
      },
      "reference": "Exercise 3.8",
      "page": 60,
      "referenceRole": "primary-archive",
      "precise": "<p>Every Jordan-measurable bounded set \\(E\\) is Lebesgue measurable and \\(m(E)=m_{PJ}(E)\\). For bounded sets, \\[m_{*,PJ}(E)\\le m_*(E)\\le m^*(E)\\le m^{*,PJ}(E).\\]</p>",
      "intuition": "<p>Lebesgue approximations allow more flexible pieces, so their inner/outer interval is nested inside the Jordan interval.</p>",
      "example": "<p>A disk whose boundary has planar measure zero has the same area under both constructions.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Shrink elementary inner approximations to compact ones and enlarge elementary outer approximations to open ones, changing volume arbitrarily little. The two inequalities follow by suprema and infima; equal Jordan endpoints squeeze the Lebesgue endpoints.</p>",
      "oralQuestions": [
        "3.LF.1"
      ]
    },
    {
      "id": "ch3-dimension-measure",
      "title": "Lebesgue measure depends on dimension",
      "type": "proposition",
      "section": "3.9",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.2",
        "label": "Unnumbered discussion after Example 3.14",
        "page": 62
      },
      "reference": "Unnumbered discussion after Example 3.14",
      "page": 62,
      "referenceRole": "primary-archive",
      "precise": "<p>A segment of positive length has positive one-dimensional Lebesgue measure but zero two-dimensional Lebesgue measure when embedded in the plane. The notation \\(m_d\\) records the ambient dimension.</p>",
      "intuition": "<p>Length, area and volume measure different geometric quantities. A lower-dimensional set can have substantial size in its own dimension and no volume in a larger one.</p>",
      "example": "<p>The horizontal segment \\([0,1]\\times\\{0\\}\\) has planar measure zero, although its length is one.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Cover the segment by \\([0,1]\\times(-\\varepsilon,\\varepsilon)\\), whose area is 2ε, then let ε decrease to zero. Its one-dimensional parameter interval has measure one.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-nonmeasurable",
      "title": "Not every subset is Lebesgue measurable",
      "type": "proposition",
      "section": "3.9",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.2",
        "label": "Unnumbered Vitali discussion",
        "page": 62
      },
      "reference": "Unnumbered Vitali discussion",
      "page": 62,
      "referenceRole": "primary-archive",
      "precise": "<p>There exist subsets of \\(\\mathbb R\\) that are not Lebesgue measurable. A standard construction chooses one representative from each equivalence class of \\([0,1]\\) under \\(x\\sim y\\iff x-y\\in\\mathbb Q\\). This uses a choice principle.</p>",
      "intuition": "<p>Countable additivity and translation invariance cannot consistently assign a volume to every possible subset.</p>",
      "example": "<p>A Vitali representative set is a subset of \\([0,1]\\), yet cannot have a Lebesgue measure.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Its distinct rational translates by q∈Q∩[−1,1] are disjoint; their union covers [0,1] and lies in [−1,2]. If the representative set had measure zero, the union would have measure zero; if positive, its countable disjoint translates would have infinite measure. Both contradict the containing intervals.</p>",
      "correction": "The archive states existence and names Vitali, without providing a construction or proof. This proof sketch is added study material, not a lecture or archive quotation.",
      "oralQuestions": []
    },
    {
      "id": "ch3-density-topic",
      "title": "Density and separability in Lᵖ",
      "type": "topic",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Density in $L^p$"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Theorems 3.45–3.46",
        "page": 78
      },
      "reference": "Theorems 3.45–3.46",
      "page": 78,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>For \\(1\\le p&lt;\\infty\\), bounded-support simple functions and \\(C_c(\\Omega)\\) are dense in \\(L^p(\\Omega)\\), and these spaces are separable. On a nonempty open domain, \\(C_c\\) is not dense in \\(L^\\infty\\), and \\(L^\\infty\\) is not separable.</p>",
      "intuition": "<p>Small-measure errors vanish in finite-p norms but can retain full essential height at p=∞.</p>",
      "example": "<p>A continuous ramp can approximate a jump indicator in L¹ by shrinking its transition interval, yet cannot approximate its jump with essential-supremum error below 1/2.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-cutoff",
      "title": "Continuous cutoff around a compact set",
      "type": "proposition",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Compact neighbourhoods and Urysohn's lemma"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Proposition 3.44",
        "page": 77
      },
      "reference": "Proposition 3.44",
      "page": 77,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>If \\(K\\subset\\Omega\\subseteq\\mathbb R^d\\), with \\(K\\) compact and \\(\\Omega\\) open, there is \\(\\varphi\\in C_c(\\Omega)\\) with \\(0\\le\\varphi\\le1\\) and \\(\\varphi=1\\) on \\(K\\).</p>",
      "intuition": "<p>A cutoff keeps a compact region intact and turns the function off before reaching the boundary of the domain.</p>",
      "example": "<p>For \\(K=[-1,1]\\subset(-3,3)\\), a trapezoidal function equal to one on K and zero outside [−2,2] works.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For nonempty K choose δ&gt;0 with Kδ compactly contained in Ω; if Ω=Rᵈ choose any finite δ. Set φ(x)=max{1−d(x,K)/δ,0}. Distance continuity gives continuity, its support lies in Kδ, and it equals one on K. For K empty take φ=0.</p>",
      "correction": "The archive proof on p78 says x∈K implies d(x,K)=1; the correct distance is zero. The displayed ratio cutoff still has value one. This card uses the equivalent simpler distance cutoff.",
      "oralQuestions": [
        "3.LF.11"
      ]
    },
    {
      "id": "ch3-simple-density",
      "title": "Bounded-support simple functions are dense in finite Lᵖ",
      "type": "theorem",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Density in $L^p$"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Theorem 3.45(i)",
        "page": 78
      },
      "reference": "Theorem 3.45(i)",
      "page": 78,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>For open \\(\\Omega\\subseteq\\mathbb R^d\\) and \\(1\\le p&lt;\\infty\\), real simple functions on \\(\\Omega\\) that vanish outside a bounded set are dense in the real-valued space \\(L^p(\\Omega)\\).</p>",
      "intuition": "<p>First remove far-away and very large values; then quantize the remaining finite range into small height intervals.</p>",
      "example": "<p>An integrable unbounded function such as \\(x^{-1/4}\\) on \\((0,1)\\) is approximated in L² by truncating its height and replacing the truncated range with finitely many levels.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For f≥0, choose simple s_n supported in Ω∩B_n with 0≤s_n≤f and s_n→f pointwise a.e., using range truncation and finer bands. Then |f−s_n|ᵖ≤|f|ᵖ and dominated convergence gives norm convergence. Apply the construction to positive and negative parts for signed f.</p>",
      "correction": "A diagonal sequence requires coordinated approximations; the sketch uses one explicit truncation/quantization schedule rather than assuming an arbitrary diagonal converges.",
      "oralQuestions": [
        "3.LF.12"
      ]
    },
    {
      "id": "ch3-cc-density",
      "title": "Compactly supported continuous functions are dense in finite Lᵖ",
      "type": "theorem",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Density in $L^p$"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Theorem 3.45(ii)",
        "page": 78
      },
      "reference": "Theorem 3.45(ii)",
      "page": 78,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>For open \\(\\Omega\\subseteq\\mathbb R^d\\) and \\(1\\le p&lt;\\infty\\), \\(\\overline{C_c(\\Omega)}^{\\|\\cdot\\|_p}=L^p(\\Omega)\\).</p>",
      "intuition": "<p>Approximate measurable sets in volume, then replace their abrupt indicators by continuous cutoffs. Finite-p norms tolerate a small transition region.</p>",
      "example": "<p>For \\(\\mathbf1_{[0,1]}\\) on \\(\\mathbb R\\), continuous cutoffs with transition regions of total length at most \\(2\\varepsilon\\) have Lᵖ error at most \\((2\\varepsilon)^{1/p}\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Use simple-function density. For a bounded measurable F⊂Ω, choose compact K⊂F⊂U⊂Ω with m(U\\K)&lt;η. A cutoff g equal to one on K and supported in U gives ∫|g−1_F|ᵖ≤m(U\\K). Approximate the finitely many indicators in a simple function and sum the errors using Minkowski.</p>",
      "correction": "For signed coefficients the error bound is |α|ᵖm(U\\K), not αᵖm(U\\K). Choose U inside Ω so the resulting support is compact in the required domain.",
      "oralQuestions": [
        "3.LF.12"
      ]
    },
    {
      "id": "ch3-cc-not-linfinity-dense",
      "title": "Continuous functions cannot erase an essential jump",
      "type": "proposition",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Density in $L^p$"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Theorem 3.45(iii)",
        "page": 78
      },
      "reference": "Theorem 3.45(iii)",
      "page": 78,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>For nonempty open \\(\\Omega\\subseteq\\mathbb R^d\\), \\(C_c(\\Omega)\\) is not dense in \\(L^\\infty(\\Omega)\\). A jump across a hyperplane inside a ball contained in Ω has distance at least \\(1/2\\) from every continuous approximant.</p>",
      "intuition": "<p>Both sides of a genuine jump have positive measure. A continuous function cannot stay close to both constant values all the way to the interface.</p>",
      "example": "<p>On \\((-1,1)\\), \\(f=\\mathbf1_{(0,1)}\\) satisfies \\(\\|f-g\\|_{L^\\infty}\\ge1/2\\) for every continuous \\(g\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>If the essential error were c&lt;1/2, continuity would force g≤c on one open side and g≥1−c on the other: an a.e. bound on an open side extends everywhere there. Taking limits at an interior interface point gives 1−c≤c, a contradiction.</p>",
      "correction": "The archive argument choosing any function discontinuous at one point is insufficient: changing a continuous function at one point does not change its L∞ class. The counterexample here has a genuine essential jump. Empty domains are excluded.",
      "oralQuestions": []
    },
    {
      "id": "ch3-simple-linfinity-density",
      "title": "Simple functions approximate essentially bounded functions",
      "type": "proposition",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Density in $L^p$"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Theorem 3.45(iii)",
        "page": 78
      },
      "reference": "Theorem 3.45(iii)",
      "page": 78,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>On a bounded measurable domain Ω, simple functions are dense in \\(L^\\infty(\\Omega)\\). More generally, finite-range measurable functions approximate any \\(L^\\infty\\) function on any measurable domain, but may not have bounded support there.</p>",
      "intuition": "<p>Uniformly quantizing a bounded range controls the maximum error directly. The bounded-domain assumption matters only for the archive class requiring bounded support.</p>",
      "example": "<p>If \\(0\\le f\\le M\\) a.e., rounding down to multiples of \\(M/n\\) yields a simple function with essential error at most \\(M/n\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Choose a bounded representative by altering a null set; partition its range into finitely many intervals of length ε and use one height on each measurable preimage. On bounded Ω the resulting simple function automatically has bounded support relative to the domain.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-lp-separable",
      "title": "Finite Lᵖ spaces are separable",
      "type": "theorem",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Separability of $L^p$"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Theorem 3.46",
        "page": 79
      },
      "reference": "Theorem 3.46",
      "page": 79,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>For open \\(\\Omega\\subseteq\\mathbb R^d\\) and \\(1\\le p&lt;\\infty\\), \\(L^p(\\Omega)\\) has a countable dense subset.</p>",
      "intuition": "<p>Function spaces can be infinite-dimensional while still admitting a countable collection of approximants at every accuracy.</p>",
      "example": "<p>Finite rational linear combinations of indicators of rational boxes, restricted to Ω, form a countable family sufficient for density after regular approximation.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Approximate f by bounded-support simple functions. Approximate each finite-measure level set in measure by finite unions of boxes with rational endpoints and each coefficient by a rational number. Indicator Lᵖ errors are powers of symmetric-difference measures, so these countably many choices give arbitrarily small norm errors.</p>",
      "correction": "The archive omits the finite-p proof and sketches the rational-box approximation route. The proof sketch expands that route.",
      "oralQuestions": []
    },
    {
      "id": "ch3-linfinity-nonseparable",
      "title": "L∞ is not separable on a nonempty open domain",
      "type": "theorem",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Separability of $L^p$"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Theorem 3.46",
        "page": 79
      },
      "reference": "Theorem 3.46",
      "page": 79,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>If \\(\\Omega\\subseteq\\mathbb R^d\\) is nonempty and open, then \\(L^\\infty(\\Omega)\\) is not separable.</p>",
      "intuition": "<p>Uncountably many indicator functions can remain a fixed distance apart, forcing any dense set to be uncountable.</p>",
      "example": "<p>Inside a ball contained in Ω, take nested concentric balls \\(B_r\\) with a continuum of radii. Distinct indicators satisfy \\(\\|\\mathbf1_{B_r}-\\mathbf1_{B_s}\\|_\\infty=1\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Open L∞ balls of radius1/2 around those indicators are pairwise disjoint. A dense subset must intersect each one, requiring uncountably many elements.</p>",
      "correction": "The conclusion needs a nontrivial domain. On a null domain L∞ consists only of the zero class and is separable; the archive’s surrounding setting is an open domain.",
      "oralQuestions": [
        "3.LF.13"
      ]
    },
    {
      "id": "ch3-finite-measure-embedding",
      "title": "Finite-measure ordering of Lᵖ spaces",
      "type": "proposition",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Comparing different $L^p$ spaces"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Remark 3.47",
        "page": 80
      },
      "reference": "Remark 3.47",
      "page": 80,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>If \\(0&lt;m(\\Omega)&lt;\\infty\\) and \\(1\\le p\\le q\\le\\infty\\), then \\[\\|f\\|_p\\le m(\\Omega)^{1/p-1/q}\\|f\\|_q,\\qquad L^q(\\Omega)\\subseteq L^p(\\Omega).\\] A null domain is trivial separately.</p>",
      "intuition": "<p>On finite volume, a stronger power or essential bound also controls lower powers. The volume factor tracks the domain size.</p>",
      "example": "<p>On a probability-size domain with measure one, \\(\\|f\\|_1\\le\\|f\\|_2\\le\\|f\\|_\\infty\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For p&lt;q&lt;∞ apply Hölder to |f|ᵖ·1 with conjugate exponents q/p and q/(q−p), then take the pth root. For q=∞ integrate |f|ᵖ≤||f||∞ᵖ. The p=q case is equality.</p>",
      "oralQuestions": [
        "3.16"
      ]
    },
    {
      "id": "ch3-lp-no-global-inclusion",
      "title": "Different Lᵖ spaces need not contain one another",
      "type": "proposition",
      "section": "3.10",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Comparing different $L^p$ spaces"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Remark 3.47",
        "page": 80
      },
      "reference": "Remark 3.47",
      "page": 80,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>On \\((0,\\infty)\\), neither \\(L^1\\subseteq L^2\\) nor \\(L^2\\subseteq L^1\\). Without finite measure there is no unconditional ordering by exponent.</p>",
      "intuition": "<p>Large exponents penalize singularities more, while small exponents penalize slowly decaying tails more.</p>",
      "example": "<p>\\(f(x)=(1+x)^{-1}\\) lies in L² but not L¹; \\(g(x)=x^{-1/2}\\mathbf1_{(0,1)}\\) lies in L¹ but not L².</p><p>More generally, given \\(1\\le p&lt;q\\le\\infty\\), choose \\(1/q&lt;\\alpha&lt;1/p\\), with \\(1/\\infty=0\\). On \\((0,\\infty)\\), the function \\(x^{-\\alpha}\\mathbf1_{(0,1)}\\) belongs to \\(L^p\\setminus L^q\\), while \\(x^{-\\alpha}\\mathbf1_{[1,\\infty)}\\) belongs to \\(L^q\\setminus L^p\\). For finite exponents this follows from the power-integral tests at zero and infinity. If \\(q=\\infty\\), the first function is unbounded and the second is bounded. Thus neither inclusion is available in general.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Compute ∫₀∞(1+x)⁻²dx=1 while the power1 integral diverges logarithmically. Near zero, ∫₀¹x⁻¹ᐟ²dx=2 while ∫₀¹x⁻¹dx diverges.</p>",
      "oralQuestions": [
        "3.16"
      ]
    },
    {
      "id": "ch3-convolution-topic",
      "title": "Local spaces and convolution",
      "type": "topic",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4–3.5",
        "label": "Definition 3.48 and Section 3.5",
        "page": 80
      },
      "reference": "Definition 3.48 and Section 3.5",
      "page": 80,
      "referenceRole": "primary-archive",
      "precise": "<p>Local Lᵖ spaces control every compact subregion. Convolution averages translated copies of one function against another; its integrability and support are governed by Young’s inequality and support addition.</p>",
      "intuition": "<p>Local information suffices when the other convolution factor has compact support.</p>",
      "example": "<p>A constant function is locally integrable on all of space even though it is not globally L¹.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-local-lp",
      "title": "Locally Lᵖ functions",
      "type": "definition",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Local $L^p$ spaces"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Definition 3.48",
        "page": 80
      },
      "reference": "Definition 3.48",
      "page": 80,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>For open \\(\\Omega\\subseteq\\mathbb R^d\\), \\(L^p_{\\mathrm{loc}}(\\Omega)\\) consists of measurable a.e. classes satisfying \\(f\\mathbf1_K\\in L^p(\\Omega)\\) for every compact \\(K\\subset\\Omega\\), where \\(1\\le p\\le\\infty\\).</p>",
      "intuition": "<p>Only behaviour on compact sets away from the boundary is tested; growth at infinity or a boundary singularity can remain uncontrolled.</p>",
      "example": "<p>\\(f(x)=1/x\\) belongs to \\(L^p_{\\mathrm{loc}}((0,1))\\) for every p, including∞, although it is not in any global finite Lᵖ((0,1)) with p≥1.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": [
        "3.17"
      ]
    },
    {
      "id": "ch3-local-inclusions",
      "title": "Global-to-local and local exponent inclusions",
      "type": "proposition",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "current-transcription",
      "coverage": "current",
      "lectures": [
        {
          "date": "2026-10-28",
          "title": "RFA - 2026-10-28 - Class Notes",
          "heading": "Local $L^p$ spaces"
        }
      ],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.4",
        "label": "Exercise 3.49",
        "page": 80
      },
      "reference": "Exercise 3.49",
      "page": 80,
      "referenceRole": "secondary-archive-concordance",
      "precise": "<p>\\(L^p(\\Omega)\\subseteq L^p_{\\mathrm{loc}}(\\Omega)\\). The converse may fail. If \\(1\\le p\\le q\\le\\infty\\), then \\(L^q_{\\mathrm{loc}}(\\Omega)\\subseteq L^p_{\\mathrm{loc}}(\\Omega)\\); in particular local Lᵖ implies local L¹.</p>",
      "intuition": "<p>Every compact Euclidean set has finite measure, so the finite-volume exponent comparison applies locally even on an infinite domain.</p>",
      "example": "<p>The constant one lies in every local Lᵖ(ℝᵈ), but not in global finite Lᵖ(ℝᵈ).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Restrict a global norm to a compact K to obtain a smaller finite norm. For local ordering apply the finite-measure embedding on each compact K. The constant-function example disproves the reverse global inclusion.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-convolution",
      "title": "Convolution product",
      "type": "definition",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Theorem 3.50 (definition within statement)",
        "page": 81
      },
      "reference": "Theorem 3.50 (definition within statement)",
      "page": 81,
      "referenceRole": "primary-archive",
      "precise": "<p>Whenever the integral is absolutely convergent, define \\[(f*g)(x)=\\int_{\\mathbb R^d}f(x-y)g(y)\\,dy=\\int_{\\mathbb R^d}f(y)g(x-y)\\,dy.\\] For \\(f\\in L^1\\), \\(g\\in L^p\\), it is defined a.e. and determines an Lᵖ class.</p>",
      "intuition": "<p>The value at x collects all pairs of locations whose sum is x, weighting each pair by the product of the two function values.</p>",
      "example": "<p>For \\(f=g=\\mathbf1_{[0,1]}\\), their convolution is the triangular function \\(x\\) on [0,1], \\(2-x\\) on[1,2], and zero elsewhere.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": [
        "3.18"
      ]
    },
    {
      "id": "ch3-young-convolution",
      "title": "Young’s inequality for convolution",
      "type": "theorem",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Theorem 3.50",
        "page": 81
      },
      "reference": "Theorem 3.50",
      "page": 81,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\in L^1(\\mathbb R^d)\\), \\(g\\in L^p(\\mathbb R^d)\\), and \\(1\\le p\\le\\infty\\), then convolution is absolutely defined a.e., belongs to Lᵖ, and \\[\\|f*g\\|_p\\le\\|f\\|_1\\|g\\|_p.\\]</p>",
      "intuition": "<p>An integrable averaging kernel cannot enlarge an Lᵖ signal by more than its total absolute mass.</p>",
      "example": "<p>For a nonnegative kernel ρ with integral one, \\(\\|\\rho*g\\|_p\\le\\|g\\|_p\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>If f=0 a.e., every conclusion is immediate; otherwise ||f||₁&gt;0. At p=1 use Fubini on |f(x−y)g(y)| and translation invariance. For 1&lt;p&lt;∞, normalize |f|/||f||₁ to a probability density and use weighted Hölder: |f*g(x)|ᵖ≤||f||₁^{p−1}∫|f(y)||g(x−y)|ᵖdy; integrate. At∞ use the essential bound on g.</p>",
      "correction": "The archive proves p=1 and treats∞ directly, but omits the interior-p proof. That proof is supplied here as a study sketch.",
      "oralQuestions": [
        "3.18",
        "3.LF.14"
      ]
    },
    {
      "id": "ch3-convolution-pairing",
      "title": "Transfer a convolution across an integral pairing",
      "type": "proposition",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Remark 3.51",
        "page": 81
      },
      "reference": "Remark 3.51",
      "page": 81,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\in L^1\\), \\(g\\in L^p\\), \\(h\\in L^{p\\prime}\\) are real-valued on ℝᵈ, then, with \\(\\check f(x)=f(-x)\\), \\[\\int(f*g)h=\\int g(\\check f*h).\\]</p>",
      "intuition": "<p>Transferring the convolution from one factor to the other reflects the kernel. This is useful when testing an equation against another function.</p>",
      "example": "<p>For an even kernel \\(f(x)=f(-x)\\), the same kernel appears on either side of the pairing.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Young and Hölder give ∫|h(x)|∫|f(x−y)||g(y)|dydx&lt;∞. Fubini allows switching the order; the inner x-integral becomes (check f*h)(y).</p>",
      "correction": "The card uses the real bilinear pairing as in the archive. A complex sesquilinear pairing requires the corresponding conjugation.",
      "oralQuestions": []
    },
    {
      "id": "ch3-essential-support",
      "title": "Support of an a.e. equivalence class",
      "type": "definition",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Unnumbered definition before Exercise 3.52",
        "page": 82
      },
      "reference": "Unnumbered definition before Exercise 3.52",
      "page": 82,
      "referenceRole": "primary-archive",
      "precise": "<p>For a measurable function \\(f\\) on ℝᵈ, let \\(U\\) be the union of all open sets on which \\(f=0\\) a.e. Define \\(\\operatorname{supp}f=\\mathbb R^d\\setminus U\\). This is closed and depends only on the a.e. class.</p>",
      "intuition": "<p>Pointwise nonzero sets can change drastically after null-set modifications; essential support records where the function cannot vanish on a neighbourhood in the a.e. sense.</p>",
      "example": "<p>\\(\\mathbf1_{\\mathbb Q\\cap[0,1]}\\) has empty essential support, although the closure of its pointwise nonzero set is [0,1].</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": [
        "3.19",
        "3.LF.15"
      ],
      "proofSketch": "<p>Let \\(U\\) be the union of the open sets on which \\(f=0\\) almost everywhere. The point needing care is that this union may be uncountable. Use the countable basis of balls with rational centres and radii: every point of \\(U\\) lies in such a ball contained in one of those open sets. Thus \\(U\\) is the union of countably many basis balls on each of which \\(f=0\\) a.e.</p><p>The exceptional sets in these balls are null, and their countable union is null. Therefore \\(f=0\\) a.e. on \\(U=\\mathbb R^d\\setminus\\operatorname{supp}f\\). If \\(f=g\\) a.e., then on any open set, \\(f=0\\) a.e. if and only if \\(g=0\\) a.e.; adding the fixed null set where they differ does not change this property. Both functions therefore have exactly the same open zero regions, the same \\(U\\), and the same support.</p>",
      "proofNote": "Study proof added for oral question 3.LF.15; it does not establish current lecture coverage."
    },
    {
      "id": "ch3-support-agreement",
      "title": "Essential support agrees with continuous support",
      "type": "proposition",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Exercise 3.52",
        "page": 82
      },
      "reference": "Exercise 3.52",
      "page": 82,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\) is continuous on ℝᵈ, its essential support equals \\(\\overline{\\{x:f(x)\\ne0\\}}\\).</p>",
      "intuition": "<p>A nonzero continuous value persists on an open neighbourhood, which has positive measure, so it cannot be hidden by a null-set modification.</p>",
      "example": "<p>The triangular continuous function \\(f(x)=\\max(1-|x|,0)\\) has both supports equal to [−1,1].</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Outside the closure of the nonzero set, f vanishes on a neighbourhood. Conversely, if continuous f is zero a.e. on an open set, any nonzero point would create a positive-measure region of nonzero values, a contradiction.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-support-convolution",
      "title": "Support of a convolution",
      "type": "proposition",
      "section": "3.11",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Proposition 3.53",
        "page": 82
      },
      "reference": "Proposition 3.53",
      "page": 82,
      "referenceRole": "primary-archive",
      "precise": "<p>For \\(f\\in L^1\\), \\(g\\in L^p\\), let \\(A+B=\\{a+b:a\\in A,b\\in B\\}\\). Then \\[\\operatorname{supp}(f*g)\\subseteq\\overline{\\operatorname{supp}f+\\operatorname{supp}g}.\\] If one support is compact, the sum is closed and the bar can be omitted. If both are compact, convolution has compact support.</p>",
      "intuition": "<p>For a nonzero contribution at x, some y must lie in the second support while x−y lies in the first. The closure is needed because support is itself closed.</p>",
      "example": "<p>Indicators of [0,1] have convolution supported in [0,2].</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>On any open set outside the closed support sum, the possible integration supports never meet, so the convolution vanishes a.e. The essential support inclusion follows. A compact set plus a closed set is closed, and the sum of two compact sets is compact.</p>",
      "correction": "The archive omits the closure in the general statement. Sums of two arbitrary closed sets need not be closed; the proof only gives the closed-sum inclusion. Compactly supported applications in the following pages are unaffected.",
      "oralQuestions": [
        "3.20"
      ]
    },
    {
      "id": "ch3-smoothing-topic",
      "title": "Regularisation and test functions",
      "type": "topic",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Propositions 3.54–3.61",
        "page": 83
      },
      "reference": "Propositions 3.54–3.61",
      "page": 83,
      "referenceRole": "primary-archive",
      "precise": "<p>Convolving with a smooth compact kernel transfers smoothness to locally integrable functions. Unit-mass kernels with shrinking support approximate continuous functions locally uniformly and Lᵖ functions in finite-p norm.</p>",
      "intuition": "<p>Smoothing averages over a small neighbourhood while keeping control of support, mass, and error.</p>",
      "example": "<p>A jump function becomes a smooth transition after convolution with a mollifier.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-modulus",
      "title": "Modulus of continuity",
      "type": "definition",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Remark 3.54",
        "page": 83
      },
      "reference": "Remark 3.54",
      "page": 83,
      "referenceRole": "primary-archive",
      "precise": "<p>For uniformly continuous \\(f:\\mathbb R^d\\to\\mathbb R\\), define \\[\\omega_f(\\delta)=\\sup_{|x-y|\\le\\delta}|f(x)-f(y)|.\\] It is nonnegative and \\(\\omega_f(\\delta)\\to0\\) as \\(\\delta\\downarrow0\\).</p>",
      "intuition": "<p>The modulus packages all small-displacement errors into one scalar bound.</p>",
      "example": "<p>If f is L-Lipschitz, \\(\\omega_f(\\delta)\\le L\\delta\\). A constant function has identically zero modulus.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "correction": "The codomain includes zero; a constant function contradicts the archive’s strictly positive codomain. Use a slightly smaller δ when passing from a strict-distance uniform-continuity condition to |x−y|≤δ.",
      "oralQuestions": [
        "3.21"
      ]
    },
    {
      "id": "ch3-convolution-continuity",
      "title": "A continuous compact kernel gives continuous convolution",
      "type": "proposition",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Proposition 3.55",
        "page": 83
      },
      "reference": "Proposition 3.55",
      "page": 83,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\in C_c(\\mathbb R^d)\\) and \\(g\\in L^1_{\\mathrm{loc}}(\\mathbb R^d)\\), then \\(f*g\\) is defined at every point and is continuous on ℝᵈ.</p>",
      "intuition": "<p>Near a fixed output point, the integration samples g on one common compact set; uniform continuity of f controls the variation.</p>",
      "example": "<p>A triangular compact kernel convolved with the locally integrable sign function gives a continuous transition.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For x_n→x, all translated kernel supports lie in a common compact K. The difference is bounded by ω_f(|x_n−x|)∫_K|g|, which tends to zero. Existence follows from bounded f and local integrability of g.</p>",
      "oralQuestions": [
        "3.LF.16"
      ]
    },
    {
      "id": "ch3-convolution-derivatives",
      "title": "Differentiate the smooth convolution factor",
      "type": "proposition",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Proposition 3.56",
        "page": 84
      },
      "reference": "Proposition 3.56",
      "page": 84,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\in C_c^k(\\mathbb R^d)\\), \\(g\\in L^1_{\\mathrm{loc}}\\), then \\(f*g\\in C^k\\) and \\[D^\\alpha(f*g)=(D^\\alpha f)*g\\qquad(|\\alpha|\\le k).\\]</p>",
      "intuition": "<p>All differentiability can come from the kernel; the other factor need only be locally integrable.</p>",
      "example": "<p>A smooth compact bump convolved with an indicator is smooth even though the indicator has jumps.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For k=1, apply the fundamental theorem of calculus to f(x+h−y)−f(x−y). After subtracting h·∇f(x−y), the remainder is bounded by |h|ω_{∇f}(|h|)1_K(y). Integrating against |g| makes the remainder o(|h|). Repeat for higher derivatives.</p>",
      "correction": "The archive says multi-index length “less than k”; the same proof gives the usual |α|≤k conclusion. The difference quotient denominator is |h|, not the vector h.",
      "oralQuestions": [
        "3.22",
        "3.LF.17"
      ]
    },
    {
      "id": "ch3-mollifier",
      "title": "Mollifier and shrinking unit-mass kernels",
      "type": "definition",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Definition 3.57",
        "page": 85
      },
      "reference": "Definition 3.57",
      "page": 85,
      "referenceRole": "primary-archive",
      "precise": "<p>A mollifier sequence satisfies \\(\\rho_n\\in C_c^\\infty(\\mathbb R^d)\\), \\(\\rho_n\\ge0\\), \\(\\int\\rho_n=1\\), and \\(\\operatorname{supp}\\rho_n\\subseteq\\overline B_{1/n}(0)\\). For a nonnegative unit-mass bump ρ supported in the unit ball, set \\(\\rho_n(x)=n^d\\rho(nx)\\).</p>",
      "intuition": "<p>Support shrinks while the height increases to preserve total mass. The kernel performs a normalized local average.</p>",
      "example": "<p>Normalize \\(\\exp[-1/(1-|x|^2)]\\) for \\(|x|&lt;1\\), taking it zero for \\(|x|\\ge1\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "correction": "Visually checked p85: the archive’s bump example has the impossible condition |x|<0. The intended condition is |x|<1. Its support condition uses the closed ball.",
      "oralQuestions": [
        "3.23"
      ]
    },
    {
      "id": "ch3-mollifier-uniform",
      "title": "Mollification converges locally uniformly for continuous functions",
      "type": "proposition",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Proposition 3.58",
        "page": 85
      },
      "reference": "Proposition 3.58",
      "page": 85,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\in C(\\mathbb R^d)\\), then \\(\\rho_n*f\\to f\\) uniformly on each compact subset of ℝᵈ.</p>",
      "intuition": "<p>On a fixed compact region, values sampled within distance1/n become uniformly close to the value at the centre.</p>",
      "example": "<p>For a globally L-Lipschitz f, \\(|(\\rho_n*f)(x)-f(x)|\\le L/n\\) for every x.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Fix compact K and use uniform continuity on a compact enlargement containing K and its small shifts. The error is at most sup_{x∈K,|y|≤1/n}|f(x−y)−f(x)| times ∫ρ_n=1, hence tends uniformly to zero.</p>",
      "correction": "Uniform continuity must be applied on a compact enlargement, since x−y need not remain in K. The conclusion is on each fixed compact set, not necessarily uniform on all of space.",
      "oralQuestions": [
        "3.LF.18"
      ]
    },
    {
      "id": "ch3-mollifier-lp",
      "title": "Mollification converges in finite Lᵖ",
      "type": "theorem",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Theorem 3.59",
        "page": 86
      },
      "reference": "Theorem 3.59",
      "page": 86,
      "referenceRole": "primary-archive",
      "precise": "<p>For \\(1\\le p&lt;\\infty\\) and \\(f\\in L^p(\\mathbb R^d)\\), \\(\\|\\rho_n*f-f\\|_p\\to0\\).</p>",
      "intuition": "<p>Approximate f first by a continuous compactly supported function, where small-scale averaging is easy; Young’s inequality transfers the approximation back.</p>",
      "example": "<p>A jump indicator converges to its smoothed versions in every finite-p norm, even though essential-supremum convergence fails at the jump.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Choose f₁∈C_c with ||f−f₁||p&lt;ε. The smoothed f₁ converge uniformly on a common compact support neighbourhood, hence in Lᵖ. Young gives ||ρ_n*f−f||p≤2ε+||ρ_n*f₁−f₁||p. Take limsup and then ε→0.</p>",
      "oralQuestions": [
        "3.LF.19"
      ]
    },
    {
      "id": "ch3-smooth-density",
      "title": "Smooth compactly supported functions are dense in finite Lᵖ",
      "type": "theorem",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Corollary 3.60",
        "page": 86
      },
      "reference": "Corollary 3.60",
      "page": 86,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(\\Omega\\subseteq\\mathbb R^d\\) is open and \\(1\\le p&lt;\\infty\\), then \\(C_c^\\infty(\\Omega)\\) is dense in \\(L^p(\\Omega)\\).</p>",
      "intuition": "<p>Combine continuous approximation with smoothing at a scale smaller than the distance to the boundary.</p>",
      "example": "<p>A function in L² on an open domain can be approximated in L² by smooth functions whose supports remain strictly inside that domain.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Choose g∈C_c(Ω) close to f. Extend g by zero to ℝᵈ. Its support has positive distance from the complement of Ω, so for sufficiently large n the smooth function ρ_n*g still has compact support in Ω. Its Lᵖ error tends to zero; use the triangle inequality.</p>",
      "correction": "The archive omits the general-domain details. The sketch supplies a compact-support-first argument that avoids mollifying across the boundary.",
      "oralQuestions": []
    },
    {
      "id": "ch3-test-functions-detect",
      "title": "Smooth test functions detect a locally integrable function",
      "type": "proposition",
      "section": "3.12",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.5",
        "label": "Proposition 3.61",
        "page": 87
      },
      "reference": "Proposition 3.61",
      "page": 87,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(u\\in L^1_{\\mathrm{loc}}(\\Omega)\\), Ω open, and \\(\\int_\\Omega u\\varphi=0\\) for every \\(\\varphi\\in C_c^\\infty(\\Omega)\\), then \\(u=0\\) a.e. on Ω.</p>",
      "intuition": "<p>Testing against every smooth compact probe captures all local integral information, even though the probes form a very regular class.</p>",
      "example": "<p>If two locally integrable functions give the same integral against every smooth compact test function, they are equal a.e.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>First approximate any bounded compactly supported g by mollifications g_n. They share a bounded compact support neighbourhood, have a common bound, and a subsequence converges a.e.; dominated convergence against |u| gives ∫ug=0. Then take g=sign(u)1_K to get ∫_K|u|=0 for every compact K and exhaust Ω.</p>",
      "correction": "The conclusion from zero integral is zero almost everywhere, not pointwise. The archive’s phrase “identically zero” should be read in this a.e. sense.",
      "oralQuestions": [
        "3.LF.20"
      ]
    },
    {
      "id": "ch3-compactness-lp-topic",
      "title": "Strong compactness in Lᵖ",
      "type": "topic",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.6",
        "label": "Theorem 3.62 and Remark 3.63",
        "page": 88
      },
      "reference": "Theorem 3.62 and Remark 3.63",
      "page": 88,
      "referenceRole": "primary-archive",
      "precise": "<p>For finite p, norm boundedness and a uniform small-translation estimate give relative compactness after restriction to any finite-measure domain. Uniformly small tails additionally give relative compactness on all of ℝᵈ.</p>",
      "intuition": "<p>Translation control rules out fine oscillation and concentration. Tail control prevents mass from escaping to infinity.</p>",
      "example": "<p>Translated copies of a fixed bump have the same local regularity but can drift farther and farther away, defeating global compactness.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-translation-operator",
      "title": "Translation operator and continuity in finite Lᵖ",
      "type": "proposition",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.6",
        "label": "Shift definition before Theorem 3.62; Exercise 12 method",
        "page": 88
      },
      "reference": "Shift definition before Theorem 3.62; Exercise 12 method",
      "page": 88,
      "referenceRole": "primary-archive",
      "precise": "<p>Define \\((\\tau_h f)(x)=f(x+h)\\). Translation is an Lᵖ isometry. For each \\(f\\in L^p(\\mathbb R^d)\\), \\(1\\le p&lt;\\infty\\), \\(\\|\\tau_hf-f\\|_p\\to0\\) as \\(h\\to0\\).</p>",
      "intuition": "<p>One fixed finite-p function changes little under a tiny shift; compactness needs the estimate to hold uniformly over an entire family.</p>",
      "example": "<p>For \\(f=\\mathbf1_{[0,1]}\\), \\(\\|\\tau_h f-f\\|_p=(2|h|)^{1/p}\\) when \\(|h|\\le1\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Isometry follows from translation invariance of Lebesgue measure. Approximate f by g∈C_c; uniform continuity and a common compact support give ||τ_hg−g||p→0. Then ||τ_hf−f||p≤2||f−g||p+||τ_hg−g||p.</p>",
      "correction": "Individual translation continuity is the standard density-based step used in the archived convolution compactness exercise; this proof is supplied as study material.",
      "oralQuestions": []
    },
    {
      "id": "ch3-uniform-translation",
      "title": "Uniform translation continuity of a family",
      "type": "definition",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.6",
        "label": "Condition (23)",
        "page": 88
      },
      "reference": "Condition (23)",
      "page": 88,
      "referenceRole": "primary-archive",
      "precise": "<p>A family \\(\\mathcal F\\subset L^p(\\mathbb R^d)\\) has uniform translation continuity if \\[\\lim_{h\\to0}\\sup_{f\\in\\mathcal F}\\|\\tau_hf-f\\|_p=0.\\] Equivalently, one δ works for every f when an error ε is prescribed.</p>",
      "intuition": "<p>The order of quantifiers matters. Individual continuity allows the required shift size to depend on the function; compactness requires one common scale.</p>",
      "example": "<p>For all translated unit-interval indicators, the error is \\((2|h|)^{1/p}\\) for \\(|h|\\le1\\), independently of the interval location.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-kolmogorov-local",
      "title": "Kolmogorov–Riesz–Fréchet: finite-measure restriction",
      "type": "theorem",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.6",
        "label": "Theorem 3.62",
        "page": 88
      },
      "reference": "Theorem 3.62",
      "page": 88,
      "referenceRole": "primary-archive",
      "precise": "<p>Let \\(\\mathcal F\\) be bounded in \\(L^p(\\mathbb R^d)\\), \\(1\\le p&lt;\\infty\\), and uniformly translation continuous. For every measurable \\(\\Omega\\subseteq\\mathbb R^d\\) with \\(m(\\Omega)&lt;\\infty\\), the restrictions \\(\\mathcal F|_\\Omega\\) have compact closure in \\(L^p(\\Omega)\\).</p>",
      "intuition": "<p>Mollification approximates the whole family uniformly in Lᵖ and turns it into a uniformly bounded equicontinuous family. Arzelà–Ascoli supplies finite approximating sets.</p>",
      "example": "<p>A bounded family with common compact support and a common Lipschitz constant satisfies the condition and is relatively compact in finite Lᵖ.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Uniform translation control makes ||ρ_n*f−f||p uniformly small. For fixed n, Hölder bounds the smoothed functions and their gradients uniformly. Apply Arzelà–Ascoli on a closed ball to get finite Lᵖ approximants there. The finite measure of Ω makes the portion outside a large ball uniformly small, using the bounded smoothed functions plus the smoothing error. Hence the restrictions are totally bounded; Lᵖ completeness finishes.</p>",
      "correction": "The archive applies Arzelà–Ascoli to a merely bounded measurable set ω. The sketch applies it on a compact containing ball, then restricts. Finite measure is used in the tail reduction; Ω itself need not be bounded.",
      "oralQuestions": [
        "3.24",
        "3.LF.21"
      ]
    },
    {
      "id": "ch3-tightness",
      "title": "Uniform Lᵖ tail control",
      "type": "definition",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.6",
        "label": "Remark 3.63",
        "page": 90
      },
      "reference": "Remark 3.63",
      "page": 90,
      "referenceRole": "primary-archive",
      "precise": "<p>A family \\(\\mathcal F\\subset L^p(\\mathbb R^d)\\), \\(p&lt;\\infty\\), has uniformly small tails if \\[\\lim_{R\\to\\infty}\\sup_{f\\in\\mathcal F}\\int_{|x|&gt;R}|f(x)|^p\\,dx=0.\\]</p>",
      "intuition": "<p>Every member must keep almost all of its powered mass inside one sufficiently large region, chosen independently of the member.</p>",
      "example": "<p>A family whose supports all lie in one fixed compact set has zero tails outside a large enough ball.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-kolmogorov-global",
      "title": "Global compactness with translation and tail control",
      "type": "theorem",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.6",
        "label": "Remark 3.63 (sufficient condition)",
        "page": 90
      },
      "reference": "Remark 3.63 (sufficient condition)",
      "page": 90,
      "referenceRole": "primary-archive",
      "precise": "<p>A bounded family \\(\\mathcal F\\subset L^p(\\mathbb R^d)\\), \\(1\\le p&lt;\\infty\\), has compact closure if it is uniformly translation continuous and has uniformly small Lᵖ tails.</p>",
      "intuition": "<p>Local compactness controls the interior; a shared tail estimate makes the exterior irrelevant in norm.</p>",
      "example": "<p>Bounded functions supported in a common ball with a common Lipschitz bound form a relatively compact family in every finite Lᵖ.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Given ε, choose a ball with uniformly small tail norms. The local theorem supplies finitely many approximants for restrictions to that ball. Extend those approximants by zero; adding the tail estimate gives a finite global ε-net. Total boundedness and completeness imply compact closure.</p>",
      "correction": "The archive states this sufficient global criterion and omits proof. The sketch gives the local-to-global argument; it does not attribute a proof to the archive.",
      "oralQuestions": []
    },
    {
      "id": "ch3-escaping-translates",
      "title": "Translations can destroy global compactness",
      "type": "proposition",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.6–3.7",
        "label": "Remark 3.63; Exercise 13",
        "page": 90
      },
      "reference": "Remark 3.63; Exercise 13",
      "page": 90,
      "referenceRole": "primary-archive",
      "precise": "<p>For \\(f_n=\\mathbf1_{[n,n+1]}\\), the family is Lᵖ-bounded and uniformly translation continuous for every finite p, yet has no Lᵖ-convergent subsequence on ℝ. The same holds for integer translates of a nonzero smooth compact bump.</p>",
      "intuition": "<p>No small-scale irregularity develops; the obstruction is solely that all the mass travels out of every bounded region.</p>",
      "example": "<p>For distinct integer intervals, \\(\\|f_n-f_m\\|_p=2^{1/p}\\). Their tails are not uniformly small.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>The symmetric-difference formula yields ||τ_hf_n−f_n||pᵖ=2|h| for |h|≤1. Pairwise disjoint supports yield a fixed separation, preventing Cauchy subsequences. In every infinite subsequence of translates of a nonzero compact bump, select shifts far enough apart that their supports are disjoint. The resulting fixed norm separation excludes a Cauchy subsequence.</p>",
      "correction": "Exercise 13 requires a nonzero bump; the zero bump gives a compact singleton. Use translations along a fixed coordinate direction in dimensions greater than one.",
      "oralQuestions": []
    },
    {
      "id": "ch3-convolution-compactness",
      "title": "An integrable convolution kernel gives local compactness",
      "type": "proposition",
      "section": "3.13",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 12",
        "page": 93
      },
      "reference": "Exercise 12",
      "page": 93,
      "referenceRole": "primary-archive",
      "precise": "<p>Let \\(\\mathcal B\\subset L^p(\\mathbb R^d)\\) be bounded, \\(1\\le p&lt;\\infty\\), and \\(G\\in L^1\\). Then \\(\\{G*f:f\\in\\mathcal B\\}|_\\Omega\\) has compact closure in Lᵖ(Ω) for every measurable finite-measure Ω.</p>",
      "intuition": "<p>Convolution transfers translation continuity from the single kernel to an entire bounded family.</p>",
      "example": "<p>A moving-average kernel \\(G=\\mathbf1_{[0,1]}\\) turns any bounded L² family into a family compact after restriction to a finite interval.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Young gives ||G*f||p≤||G||₁ sup_B||f||p. Also ||τ_h(G*f)−G*f||p=||(τ_hG−G)*f||p≤||τ_hG−G||₁ sup_B||f||p→0 uniformly. Apply the local Kolmogorov–Riesz–Fréchet theorem.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-exercises-topic",
      "title": "Chapter 3 exercise toolkit",
      "type": "topic",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercises 1–13",
        "page": 90
      },
      "reference": "Exercises 1–13",
      "page": 90,
      "referenceRole": "primary-archive",
      "precise": "<p>The exercises test hypotheses of convergence theorems, membership in Lᵖ, scaling of narrow peaks, and compactness after convolution. Check the domain, exponent, and actual integrability before comparing limits.</p>",
      "intuition": "<p>A sequence may have an a.e. limit while keeping nonzero mass, or its terms may not belong to the stated normed space at all.</p>",
      "example": "<p>The function \\((1+nx^{1/3})^{-1}\\) tends to zero pointwise on \\((0,\\infty)\\), but its square behaves like a multiple of \\(x^{-2/3}\\) at infinity and is not integrable.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "oralQuestions": []
    },
    {
      "id": "ch3-fatou-negative",
      "title": "Why Fatou needs a lower bound",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 2",
        "page": 91
      },
      "reference": "Exercise 2",
      "page": 91,
      "referenceRole": "primary-archive",
      "precise": "<p>Without nonnegativity or a suitable common integrable lower bound, Fatou’s inequality can fail. For \\(f_n=-\\mathbf1_{[n,n+1]}\\), \\(f_n\\to0\\) pointwise but \\[\\int\\liminf f_n=0&gt;-1=\\liminf\\int f_n.\\]</p>",
      "intuition": "<p>Negative mass escaping to infinity disappears from the pointwise limit and reverses the one-sided inequality.</p>",
      "example": "<p>The translated negative unit rectangles form a direct counterexample; changing their sign recovers the usual nonnegative Fatou inequality.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>At every fixed x, only finitely many translated intervals contain x, giving limit zero. Each signed integral equals −1, so the claimed Fatou direction would read0≤−1, which is false.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-indicator-measurability",
      "title": "A set is measurable iff its indicator is measurable",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 3",
        "page": 91
      },
      "reference": "Exercise 3",
      "page": 91,
      "referenceRole": "primary-archive",
      "precise": "<p>For \\(A\\subseteq\\mathbb R^d\\), \\(\\mathbf1_A\\) is Lebesgue measurable iff \\(A\\) is Lebesgue measurable.</p>",
      "intuition": "<p>Indicators encode set membership as the simplest possible function, so set and function measurability must agree.</p>",
      "example": "<p>The rational indicator is measurable because the rationals are countable and measurable; the indicator of a Vitali set is not measurable.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>If the indicator is measurable, A={1_A&gt;1/2} is measurable. Conversely, each superlevel set of 1_A is empty, all of space, or A, according to the threshold.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-ae-nonnegative-limit",
      "title": "An a.e. limit preserves nonnegativity",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 4",
        "page": 91
      },
      "reference": "Exercise 4",
      "page": 91,
      "referenceRole": "primary-archive",
      "precise": "<p>If measurable \\(f_n\\ge0\\) a.e. for every n and \\(f_n\\to f\\) a.e., then \\(f\\ge0\\) a.e.</p>",
      "intuition": "<p>Collect all exceptional sets once; outside that set ordinary limits preserve order.</p>",
      "example": "<p>The a.e. limit of nonnegative approximations to a density cannot acquire a genuinely negative region.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Union the null sets where a term is negative with the null set of convergence failure. Outside this countable union every scalar f_n(x)≥0 and converges to f(x), so f(x)≥0.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-integrable-tail",
      "title": "An integrable function has vanishing tails",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 5",
        "page": 91
      },
      "reference": "Exercise 5",
      "page": 91,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\in L^1(\\mathbb R^d)\\), then \\(\\int_{|x|&gt;R}|f(x)|\\,dx\\to0\\). Thus for every ε&gt;0 one may choose a bounded measurable E with \\(\\int_{\\mathbb R^d\\setminus E}|f|&lt;\\varepsilon\\).</p>",
      "intuition": "<p>One integrable function cannot retain a fixed amount of mass arbitrarily far away.</p>",
      "example": "<p>For \\(f(x)=e^{-|x|}\\) on ℝ, the tail outside [−R,R] equals \\(2e^{-R}\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>The functions |f|1_{|x|&gt;R} tend to zero pointwise and are bounded by the integrable |f|. Dominated convergence gives the claim.</p>",
      "correction": "The printed exercise merely asks for a measurable E, which is trivial with E=ℝᵈ. Its DCT hint indicates the useful stronger bounded-set conclusion; the card states and proves that strengthening explicitly.",
      "oralQuestions": []
    },
    {
      "id": "ch3-holder-general-product",
      "title": "Hölder product estimate with target Lʳ",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 7",
        "page": 91
      },
      "reference": "Exercise 7",
      "page": 91,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f\\in L^p(E)\\), \\(g\\in L^q(E)\\), \\(p,q,r\\in[1,\\infty]\\), and \\(1/r=1/p+1/q\\), then \\(fg\\in L^r(E)\\) and \\(\\|fg\\|_r\\le\\|f\\|_p\\|g\\|_q\\).</p>",
      "intuition": "<p>Choose Hölder exponents after raising the product to the target power r, so the two factors return to their known p and q powers.</p>",
      "example": "<p>For f,g∈L⁴, their product lies in L² with \\(\\|fg\\|_2\\le\\|f\\|_4\\|g\\|_4\\).</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>When p,q finite and r finite, apply Hölder to |f|ʳ and |g|ʳ with exponents p/r and q/r, then take the rth root. If one exponent is∞, use its essential bound; if r=∞ both p,q are∞.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-radial-power-test",
      "title": "Radial power integrability near zero and infinity",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 8",
        "page": 92
      },
      "reference": "Exercise 8",
      "page": 92,
      "referenceRole": "primary-archive",
      "precise": "<p>For finite p≥1 in ℝᵈ, \\(|x|^{-\\alpha}\\mathbf1_{|x|&lt;1}\\in L^p\\) iff \\(\\alpha p&lt;d\\), whereas \\(|x|^{-\\alpha}\\mathbf1_{|x|\\ge1}\\in L^p\\) iff \\(\\alpha p&gt;d\\). At p=∞ the respective conditions are \\(\\alpha\\le0\\) and \\(\\alpha\\ge0\\).</p>",
      "intuition": "<p>Polar volume contributes a factor r^{d−1}; a singularity and a tail require opposite inequalities.</p>",
      "example": "<p>In ℝ³, \\(|x|^{-1}\\) is locally in L² near zero because2&lt;3, but its square is not integrable at infinity.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Polar coordinates reduce the pth-power integrals to constants times ∫₀¹r^{d−1−αp}dr and ∫₁∞r^{d−1−αp}dr. The endpoint exponent−1 diverges logarithmically. Essential boundedness handles p=∞ separately.</p>",
      "correction": "The printed power inequalities are finite-p criteria. They must not be applied literally at p=∞.",
      "oralQuestions": []
    },
    {
      "id": "ch3-power-log-test",
      "title": "Power and logarithm endpoint tests",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 9",
        "page": 92
      },
      "reference": "Exercise 9",
      "page": 92,
      "referenceRole": "primary-archive",
      "precise": "<p>Near zero, \\(x^a|\\log x|^b\\) is integrable iff \\(a&gt;-1\\), or \\(a=-1\\) and \\(b&lt;-1\\). At infinity, \\(x^a(\\log x)^b\\) is integrable iff \\(a&lt;-1\\), or \\(a=-1\\) and \\(b&lt;-1\\). For finite p, apply this to |f|ᵖ and inspect every singular endpoint. For p=∞, inspect essential boundedness separately.</p>",
      "intuition": "<p>Powers decide away from the critical exponent. Exactly at a=−1, the logarithm decides.</p>",
      "example": "<p>\\(\\arctan x/x\\) is bounded near zero and behaves like a constant divided by x at infinity, so on (0,∞) it lies in Lᵖ exactly for p&gt;1, including∞.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Compare logarithms with arbitrarily small power corrections away from a=−1. At the critical exponent substitute t=−log x near zero or t=log x at infinity to reduce to ∫tᵇdt. Inspect boundedness separately for∞.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-scaling-peaks",
      "title": "Scaling laws for concentrating functions",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercises 6 and 10",
        "page": 91
      },
      "reference": "Exercises 6 and 10",
      "page": 91,
      "referenceRole": "primary-archive",
      "precise": "<p>For \\(f_n(x)=n^a\\phi(n^b x)\\) on ℝᵈ, b&gt;0, \\(\\phi\\in L^p\\), \\[\\|f_n\\|_p=n^{a-bd/p}\\|\\phi\\|_p\\quad(p&lt;\\infty),\\qquad\\|f_n\\|_\\infty=n^a\\|\\phi\\|_\\infty.\\]</p>",
      "intuition": "<p>Height contributes nᵃ while shrinking volume contributes n^{−bd/p}. Their balance determines whether the norm vanishes, stays fixed, or diverges.</p>",
      "example": "<p>On (0,∞), \\(f_n=n^{1/3}e^{-nx}\\) has \\(\\|f_n\\|_p=p^{-1/p}n^{1/3-1/p}\\): convergence to zero for1≤p&lt;3, constant norm at3, divergence for p&gt;3, and L∞ norm n^{1/3}.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For finite p substitute y=nᵇx in the integral, producing n^{ap−bd}; take the pth root. For∞ a dilation changes neither the essential range nor its supremum; multiply by the height factor.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-convergence-exercise-method",
      "title": "Separate a.e., integral, and uniform convergence",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 6",
        "page": 91
      },
      "reference": "Exercise 6",
      "page": 91,
      "referenceRole": "primary-archive",
      "precise": "<p>For \\(f_n(x)=nx/(1+n^2x^2)\\) on [0,1], \\(f_n\\to0\\) pointwise and \\(\\int_0^1f_n=\\log(1+n^2)/(2n)\\to0\\), but \\(\\|f_n\\|_\\infty=1/2\\), so convergence is not uniform.</p>",
      "intuition": "<p>The worst error can move with n. Pointwise limits and integrals may behave well while the maximum error stays fixed.</p>",
      "example": "<p>Changing the domain to (0,∞) leaves the pointwise limit zero but makes each integral infinite; the domain must be checked before exchanging limits.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Fix x&gt;0 for the pointwise limit and evaluate x=0 separately. Integrate using u=1+n²x². Differentiate in x to locate the maximum at x=1/n with height1/2. On the half-line the antiderivative diverges logarithmically.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-lp-membership-first",
      "title": "Check Lᵖ membership before claiming norm convergence",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 10(b)",
        "page": 92
      },
      "reference": "Exercise 10(b)",
      "page": 92,
      "referenceRole": "primary-archive",
      "precise": "<p>For \\(f_n(x)=(1+nx^{1/3})^{-1}\\) on [0,∞), \\(f_n\\to0\\) a.e., but \\(f_n\\notin L^2([0,\\infty))\\) for any n. Therefore this is not a sequence converging in the Banach space L².</p>",
      "intuition": "<p>Pointwise decay in the sequence index cannot repair a nonintegrable tail in the spatial variable.</p>",
      "example": "<p>For x large, \\(f_n(x)^2\\) is comparable to \\(n^{-2}x^{-2/3}\\), whose integral diverges at infinity.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>For x≥n^{−3}, nx^{1/3}≥1, hence f_n²≥(4n²)^{−1}x^{−2/3}. This lower bound has infinite integral. For each fixed x&gt;0, the denominator tends to infinity, proving a.e. convergence.</p>",
      "oralQuestions": []
    },
    {
      "id": "ch3-exercise11-correction",
      "title": "Exercise 11: the printed peak prevents Lᵖ convergence",
      "type": "proposition",
      "section": "3.14",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.7",
        "label": "Exercise 11",
        "page": 92
      },
      "reference": "Exercise 11",
      "page": 92,
      "referenceRole": "primary-archive",
      "precise": "<p>The printed function equals −1 for x&lt;−1/n, n for |x|≤1/n, and1 for x&gt;1/n. Its a.e. limit is sign(x). For finite p, \\[\\|f_n-\\operatorname{sign}\\|_p^p=\\frac{(n+1)^p+(n-1)^p}{n}.\\] The difference does not tend to zero for any p≥1.</p>",
      "intuition": "<p>The shrinking region is outweighed by its growing height. The pointwise limit misses a persistent or increasing mass of error.</p>",
      "example": "<p>At p=1 the error equals2; for p&gt;1 it grows like \\(2n^{p-1}\\). The essential-supremum error is n+1. Both f_n and sign are outside global finite Lᵖ because of their constant tails.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Outside [−1/n,1/n] the functions agree. On its negative and positive halves the absolute errors are n+1 and n−1, each over length1/n. Integrate these constants. At every x≠0 the exceptional interval eventually misses x, proving the a.e. limit.</p>",
      "correction": "Visually checked pp92–93: the central value is printed n, while the exercise claims finite-p convergence. These are inconsistent. The card analyzes the printed formula and does not silently substitute a guessed intended formula such as nx.",
      "oralQuestions": []
    },
    {
      "id": "ch3-riemann-uniform-limit",
      "title": "Uniform limits preserve Riemann integrability",
      "type": "proposition",
      "section": "3.9",
      "chapter": "3",
      "sourceKind": "archived-notes",
      "coverage": "ahead",
      "lectures": [],
      "archiveReference": {
        "title": "Di Francesco — Notes 2025–2026",
        "chapter": "3",
        "section": "3.1",
        "label": "Exercise 3.5",
        "page": 59
      },
      "reference": "Exercise 3.5",
      "page": 59,
      "referenceRole": "primary-archive",
      "precise": "<p>If \\(f_n:[a,b]\\to\\mathbb R\\) are Riemann integrable and \\(f_n\\to f\\) uniformly, then f is Riemann integrable and \\(\\int_a^b f_n\\to\\int_a^b f\\).</p>",
      "intuition": "<p>Uniform error controls every upper and lower rectangle height, so it controls the unresolved area and the final integral error.</p>",
      "example": "<p>Uniform approximation by step functions can establish Riemann integrability even when the approximating functions have jumps.</p>",
      "authorship": "Study adaptation of archived course notes; intuition, examples, and proof sketches are AI-authored and are not claims of current lecture coverage.",
      "proofSketch": "<p>Uniform convergence makes f bounded. For any partition P, \\(U(f,P)-L(f,P)\\le U(f_N,P)-L(f_N,P)+2(b-a)\\|f-f_N\\|_\\infty\\). Choose N to make the uniform term small, then P using integrability of f_N. The Darboux criterion gives integrability of f, and \\(|\\int_a^b(f_n-f)|\\le(b-a)\\|f_n-f\\|_\\infty\\to0\\).</p>",
      "oralQuestions": []
    }
  ],
  "edges": [
    {
      "from": "metric-subspace",
      "to": "metric",
      "label": "specialises",
      "reason": "A metric subspace retains the ambient metric on a restricted set of points."
    },
    {
      "from": "reverse-triangle",
      "to": "metric",
      "label": "uses",
      "reason": "The reverse triangle estimate follows by applying the metric triangle inequality in both directions."
    },
    {
      "from": "norm",
      "to": "linear-space",
      "label": "uses",
      "reason": "The norm axioms use vector addition and scalar multiplication."
    },
    {
      "from": "induced-metric",
      "to": "norm",
      "label": "uses",
      "reason": "Norm definiteness, homogeneity and the triangle inequality verify the metric axioms for the difference norm."
    },
    {
      "from": "induced-metric",
      "to": "metric",
      "label": "implies",
      "reason": "The theorem produces a metric from the norm of a vector difference."
    },
    {
      "from": "convex-set",
      "to": "linear-space",
      "label": "uses",
      "reason": "A line segment is expressed using linear combinations of two vectors."
    },
    {
      "from": "linear-subspace",
      "to": "linear-space",
      "label": "specialises",
      "reason": "A subspace is a subset retaining the ambient linear operations and axioms."
    },
    {
      "from": "discrete-metric",
      "to": "metric",
      "label": "specialises",
      "reason": "The zero-or-one distance satisfies each metric axiom on any set."
    },
    {
      "from": "discrete-metric",
      "to": "norm",
      "label": "contrasts with",
      "reason": "Failure of norm homogeneity shows why a nontrivial discrete metric is not norm induced."
    },
    {
      "from": "norm-balls-convex",
      "to": "norm",
      "label": "uses",
      "reason": "The proof bounds the norm of a convex combination using homogeneity and the triangle inequality."
    },
    {
      "from": "norm-balls-convex",
      "to": "convex-set",
      "label": "implies",
      "reason": "The norm estimate proves that the segment between any two points in the unit ball stays inside."
    },
    {
      "from": "convergent-sequence",
      "to": "metric",
      "label": "uses",
      "reason": "Metric convergence compares the distances from late terms to a proposed limit."
    },
    {
      "from": "cauchy-sequence",
      "to": "metric",
      "label": "uses",
      "reason": "The Cauchy condition controls distances between pairs of late sequence terms."
    },
    {
      "from": "unique-metric-limit",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "The uniqueness theorem starts with two limits for the same sequence."
    },
    {
      "from": "unique-metric-limit",
      "to": "metric",
      "label": "uses",
      "reason": "The triangle inequality and definiteness force the distance between two proposed limits to be zero."
    },
    {
      "from": "convergent-is-cauchy",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "Convergence provides a common point within half the error tolerance of every sufficiently late term."
    },
    {
      "from": "convergent-is-cauchy",
      "to": "cauchy-sequence",
      "label": "implies",
      "reason": "A triangle estimate verifies the Cauchy condition for every convergent sequence."
    },
    {
      "from": "complete-space",
      "to": "cauchy-sequence",
      "label": "uses",
      "reason": "Completeness quantifies over all Cauchy sequences in the space."
    },
    {
      "from": "complete-space",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "Completeness requires each Cauchy sequence to converge to a point of the same space."
    },
    {
      "from": "banach-space",
      "to": "norm",
      "label": "specialises",
      "reason": "A Banach space is a normed linear space with an additional completeness property."
    },
    {
      "from": "banach-space",
      "to": "complete-space",
      "label": "specialises",
      "reason": "A Banach space is complete for its norm-induced metric."
    },
    {
      "from": "banach-space",
      "to": "induced-metric",
      "label": "uses",
      "reason": "The metric used in the Banach-space definition is induced by the norm."
    },
    {
      "from": "subsequence",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "Subsequences select terms from a sequence and retain its limit whenever the original sequence converges."
    },
    {
      "from": "limsup-liminf",
      "to": "subsequence",
      "label": "uses",
      "reason": "For bounded real sequences, limsup and liminf identify the extreme subsequential limits."
    },
    {
      "from": "bounded-set",
      "to": "metric",
      "label": "uses",
      "reason": "Diameter is the supremum of pairwise distances measured by the metric."
    },
    {
      "from": "distance-to-set",
      "to": "metric",
      "label": "uses",
      "reason": "Distance to a set is an infimum of metric distances to its points."
    },
    {
      "from": "distance-to-set",
      "to": "closure",
      "label": "characterises",
      "reason": "A point belongs to the closure of a nonempty set exactly when its distance to that set is zero."
    },
    {
      "from": "series-normed-space",
      "to": "norm",
      "label": "uses",
      "reason": "The norm measures convergence of the finite partial sums."
    },
    {
      "from": "series-normed-space",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "A convergent series is defined as a convergent sequence of partial sums."
    },
    {
      "from": "metric-continuity",
      "to": "metric",
      "label": "uses",
      "reason": "Epsilon–delta continuity compares input and output metric distances."
    },
    {
      "from": "function-limit",
      "to": "accumulation-point",
      "label": "uses",
      "reason": "An accumulation point supplies nontrivial approaches for the punctured-neighbourhood limit test."
    },
    {
      "from": "uniform-continuity",
      "to": "metric-continuity",
      "label": "specialises",
      "reason": "Uniform continuity strengthens continuity by making the input tolerance independent of the base point."
    },
    {
      "from": "sequential-continuity",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "Sequential continuity requires preservation of limits for every convergent input sequence."
    },
    {
      "from": "continuity-sequential-criterion",
      "to": "sequential-continuity",
      "label": "characterises",
      "reason": "The proposition identifies the sequential test with metric continuity."
    },
    {
      "from": "continuity-sequential-criterion",
      "to": "metric-continuity",
      "label": "characterises",
      "reason": "A map between metric spaces is continuous exactly when it passes every sequential test."
    },
    {
      "from": "semicontinuity",
      "to": "limsup-liminf",
      "label": "uses",
      "reason": "Upper and lower semicontinuity compare function values with limits superior and inferior along approaching sequences."
    },
    {
      "from": "semicontinuity",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "The semicontinuity inequalities are tested along all sequences converging to the point."
    },
    {
      "from": "closure",
      "to": "topological-space",
      "label": "uses",
      "reason": "Closure is formed from the closed sets determined by the topology."
    },
    {
      "from": "dense-set",
      "to": "closure",
      "label": "uses",
      "reason": "Density means that the closure equals the whole ambient space."
    },
    {
      "from": "accumulation-point",
      "to": "topological-space",
      "label": "uses",
      "reason": "The source definition tests every open neighbourhood for infinitely many points of the set."
    },
    {
      "from": "interior",
      "to": "topological-space",
      "label": "uses",
      "reason": "An interior point has an open neighbourhood contained in the set."
    },
    {
      "from": "nowhere-dense",
      "to": "closure",
      "label": "uses",
      "reason": "Nowhere density first takes the closure of the set."
    },
    {
      "from": "nowhere-dense",
      "to": "interior",
      "label": "uses",
      "reason": "Nowhere density requires the closure to have empty interior."
    },
    {
      "from": "separable-space",
      "to": "dense-set",
      "label": "uses",
      "reason": "Separability asks for a dense subset that is countable."
    },
    {
      "from": "boundary",
      "to": "interior",
      "label": "uses",
      "reason": "A boundary point is interior to neither the set nor its complement."
    },
    {
      "from": "boundary",
      "to": "closure",
      "label": "uses",
      "reason": "The boundary equals the closure with the interior removed."
    },
    {
      "from": "topological-convergence",
      "to": "topological-space",
      "label": "uses",
      "reason": "Topological convergence is defined by eventual membership in open neighbourhoods."
    },
    {
      "from": "topological-continuity",
      "to": "topological-space",
      "label": "uses",
      "reason": "Topological continuity requires open inverse images in the domain topology."
    },
    {
      "from": "open-map",
      "to": "topological-space",
      "label": "uses",
      "reason": "An open map is defined by preservation of open sets under direct images."
    },
    {
      "from": "metric-balls",
      "to": "metric",
      "label": "uses",
      "reason": "Metric balls collect points whose distance to a centre satisfies a radius bound."
    },
    {
      "from": "metric-open-set",
      "to": "metric-balls",
      "label": "uses",
      "reason": "Metric openness requires a contained ball around every point of the set."
    },
    {
      "from": "metric-topology",
      "to": "metric-open-set",
      "label": "uses",
      "reason": "The metric topology consists of precisely the metric-open subsets."
    },
    {
      "from": "metric-topology",
      "to": "topological-space",
      "label": "implies",
      "reason": "Metric-open subsets satisfy the axioms defining a topology."
    },
    {
      "from": "metric-topology-compatibility",
      "to": "metric-topology",
      "label": "uses",
      "reason": "The equivalences hold for the topology induced by the given metrics."
    },
    {
      "from": "metric-topology-compatibility",
      "to": "topological-convergence",
      "label": "characterises",
      "reason": "Metric convergence is equivalent to neighbourhood convergence in the induced topology."
    },
    {
      "from": "metric-topology-compatibility",
      "to": "metric-continuity",
      "label": "characterises",
      "reason": "Epsilon–delta continuity is equivalent to topological continuity for the induced metric topologies."
    },
    {
      "from": "metric-topology-compatibility",
      "to": "topological-continuity",
      "label": "characterises",
      "reason": "Open-inverse-image continuity agrees with the metric definition on metric spaces."
    },
    {
      "from": "closed-sequential-criterion",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "The criterion tests whether limits of convergent sequences stay inside the subset."
    },
    {
      "from": "closed-sequential-criterion",
      "to": "closure",
      "label": "characterises",
      "reason": "In a metric space, containing all limits of sequences from the set is equivalent to equalling its closure."
    },
    {
      "from": "closed-complete",
      "to": "complete-space",
      "label": "uses",
      "reason": "Ambient completeness provides a limit for each Cauchy sequence in the subset."
    },
    {
      "from": "closed-complete",
      "to": "closed-sequential-criterion",
      "label": "uses",
      "reason": "Closedness then retains that ambient limit inside the subset."
    },
    {
      "from": "closed-complete",
      "to": "unique-metric-limit",
      "label": "uses",
      "reason": "The converse identifies an ambient limit with the limit supplied by completeness of the subset."
    },
    {
      "from": "sequential-closure",
      "to": "closure",
      "label": "characterises",
      "reason": "In a metric space, closure consists exactly of limits of sequences drawn from the set."
    },
    {
      "from": "sequential-closure",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "Shrinking metric balls produce the sequences that witness membership in the closure."
    },
    {
      "from": "sequential-compactness",
      "to": "subsequence",
      "label": "uses",
      "reason": "Sequential compactness requires the extraction of a convergent subsequence from every sequence."
    },
    {
      "from": "sequential-compactness",
      "to": "convergent-sequence",
      "label": "uses",
      "reason": "The extracted subsequence must converge to a point belonging to the same set."
    },
    {
      "from": "heine-borel",
      "to": "bolzano-weierstrass",
      "label": "uses",
      "reason": "Boundedness in finite-dimensional Euclidean space gives a convergent subsequence."
    },
    {
      "from": "heine-borel",
      "to": "closed-sequential-criterion",
      "label": "uses",
      "reason": "Closedness ensures the limit supplied by Bolzano–Weierstrass stays in the set."
    },
    {
      "from": "heine-borel",
      "to": "compactness",
      "label": "characterises",
      "reason": "For subsets of Euclidean space, closedness and boundedness are equivalent to compactness."
    },
    {
      "from": "bolzano-weierstrass",
      "to": "bounded-set",
      "label": "uses",
      "reason": "The theorem assumes a bounded sequence in finite-dimensional Euclidean space."
    },
    {
      "from": "bolzano-weierstrass",
      "to": "subsequence",
      "label": "implies",
      "reason": "The theorem supplies a subsequence with a limit in Euclidean space."
    },
    {
      "from": "open-cover",
      "to": "topological-space",
      "label": "uses",
      "reason": "An open cover is a covering family whose members are open in the ambient topology."
    },
    {
      "from": "epsilon-net",
      "to": "metric-balls",
      "label": "uses",
      "reason": "An epsilon-net covers a set by balls of one prescribed radius."
    },
    {
      "from": "epsilon-net",
      "to": "open-cover",
      "label": "specialises",
      "reason": "The balls associated with an epsilon-net constitute an open cover."
    },
    {
      "from": "total-boundedness",
      "to": "epsilon-net",
      "label": "uses",
      "reason": "Total boundedness asks for finite epsilon-nets at every positive scale."
    },
    {
      "from": "compactness",
      "to": "open-cover",
      "label": "uses",
      "reason": "Compactness requires a finite subcover of every open cover."
    },
    {
      "from": "total-bounded-implies-bounded",
      "to": "total-boundedness",
      "label": "uses",
      "reason": "The proof chooses one finite net supplied by total boundedness."
    },
    {
      "from": "total-bounded-implies-bounded",
      "to": "bounded-set",
      "label": "implies",
      "reason": "A finite net at a fixed scale gives a finite diameter bound."
    },
    {
      "from": "compactness-equivalence",
      "to": "compactness",
      "label": "characterises",
      "reason": "The theorem relates the open-cover definition to the other metric compactness criteria."
    },
    {
      "from": "compactness-equivalence",
      "to": "sequential-compactness",
      "label": "characterises",
      "reason": "Sequential compactness is equivalent to compactness in metric spaces."
    },
    {
      "from": "compactness-equivalence",
      "to": "complete-space",
      "label": "uses",
      "reason": "Completeness is one of the two conditions in the third compactness criterion."
    },
    {
      "from": "compactness-equivalence",
      "to": "total-boundedness",
      "label": "uses",
      "reason": "Total boundedness is the finite-approximation condition in the third compactness criterion."
    },
    {
      "from": "metric-density",
      "to": "dense-set",
      "label": "characterises",
      "reason": "Density is equivalent to approximating every point within every positive metric tolerance."
    },
    {
      "from": "metric-density",
      "to": "metric-balls",
      "label": "uses",
      "reason": "The metric criterion says that every ball centred anywhere in the space meets the dense set."
    },
    {
      "from": "compact-separable",
      "to": "compactness-equivalence",
      "label": "uses",
      "reason": "Compactness supplies total boundedness and therefore finite nets at every scale."
    },
    {
      "from": "compact-separable",
      "to": "epsilon-net",
      "label": "uses",
      "reason": "The proof unions finite nets at radii tending to zero."
    },
    {
      "from": "compact-separable",
      "to": "metric-density",
      "label": "uses",
      "reason": "Arbitrarily fine nets show that the countable union of their centres is dense."
    },
    {
      "from": "compact-separable",
      "to": "separable-space",
      "label": "implies",
      "reason": "The construction produces a countable dense subset of the compact metric space."
    },
    {
      "from": "compact-closed-bounded",
      "to": "compactness-equivalence",
      "label": "uses",
      "reason": "Compactness gives sequential compactness and total boundedness."
    },
    {
      "from": "compact-closed-bounded",
      "to": "closed-sequential-criterion",
      "label": "uses",
      "reason": "Sequential compactness and uniqueness of limits verify closedness."
    },
    {
      "from": "compact-closed-bounded",
      "to": "total-bounded-implies-bounded",
      "label": "uses",
      "reason": "Total boundedness supplies the required boundedness conclusion."
    },
    {
      "from": "precompactness",
      "to": "closure",
      "label": "uses",
      "reason": "Precompactness concerns the closure taken in the specified ambient space."
    },
    {
      "from": "precompactness",
      "to": "compactness",
      "label": "uses",
      "reason": "The closure must be compact for the original set to be precompact."
    },
    {
      "from": "continuous-image-compact",
      "to": "compactness",
      "label": "uses",
      "reason": "The domain must be compact before compactness of its image is concluded."
    },
    {
      "from": "continuous-image-compact",
      "to": "continuity-sequential-criterion",
      "label": "uses",
      "reason": "Continuity transfers the limit of a convergent input subsequence to its image."
    },
    {
      "from": "continuous-image-compact",
      "to": "sequential-compactness",
      "label": "uses",
      "reason": "The sequential proof extracts a convergent input subsequence and thereby an output subsequence."
    },
    {
      "from": "heine-cantor",
      "to": "compactness",
      "label": "uses",
      "reason": "Compactness supplies a convergent subsequence in the contradiction argument."
    },
    {
      "from": "heine-cantor",
      "to": "metric-continuity",
      "label": "uses",
      "reason": "Continuity forces the close-pair output sequences to approach the same value."
    },
    {
      "from": "heine-cantor",
      "to": "uniform-continuity",
      "label": "implies",
      "reason": "The theorem upgrades continuity on a compact domain to a single uniform tolerance."
    },
    {
      "from": "extreme-value",
      "to": "continuous-image-compact",
      "label": "uses",
      "reason": "The continuous image is compact in the real line, yielding boundedness and attainment of extreme values."
    },
    {
      "from": "extreme-value",
      "to": "sequential-compactness",
      "label": "uses",
      "reason": "The minimizing-sequence proof extracts a convergent subsequence with limit in the domain."
    },
    {
      "from": "extreme-value",
      "to": "metric-continuity",
      "label": "uses",
      "reason": "Continuity transfers the limiting infimum value to the limit point of the minimizing subsequence."
    },
    {
      "from": "equivalent-norms",
      "to": "norm",
      "label": "uses",
      "reason": "Norm equivalence compares two norms on one vector space using uniform positive constants."
    },
    {
      "from": "coordinate-norm-estimate",
      "to": "heine-borel",
      "label": "uses",
      "reason": "The coordinate unit sphere is closed and bounded, hence compact in finite-dimensional Euclidean space."
    },
    {
      "from": "coordinate-norm-estimate",
      "to": "extreme-value",
      "label": "uses",
      "reason": "The norm attains a strictly positive minimum on the compact coordinate unit sphere."
    },
    {
      "from": "coordinate-norm-estimate",
      "to": "norm",
      "label": "uses",
      "reason": "Homogeneity and the triangle inequality provide the upper coordinate estimate and allow rescaling."
    },
    {
      "from": "finite-dimensional-banach",
      "to": "coordinate-norm-estimate",
      "label": "uses",
      "reason": "The two coordinate estimates transfer the Cauchy condition to scalars and coordinate convergence back to the norm."
    },
    {
      "from": "finite-dimensional-banach",
      "to": "banach-space",
      "label": "implies",
      "reason": "The theorem establishes completeness for any norm on a finite-dimensional linear space."
    },
    {
      "from": "finite-dimensional-subspaces",
      "to": "finite-dimensional-banach",
      "label": "uses",
      "reason": "A subspace of a finite-dimensional space is itself finite-dimensional, so the completeness theorem applies."
    },
    {
      "from": "finite-dimensional-subspaces",
      "to": "linear-subspace",
      "label": "uses",
      "reason": "The theorem concerns subspaces with their inherited linear structure and restricted norm."
    },
    {
      "from": "finite-norm-equivalence",
      "to": "coordinate-norm-estimate",
      "label": "uses",
      "reason": "Comparing each norm with the same coordinate norm yields uniform comparison constants between them."
    },
    {
      "from": "finite-norm-equivalence",
      "to": "equivalent-norms",
      "label": "implies",
      "reason": "The coordinate bounds verify the definition of equivalent norms."
    },
    {
      "from": "lp-space",
      "to": "linear-space",
      "label": "uses",
      "reason": "Sequence spaces use coordinatewise vector addition and scalar multiplication."
    },
    {
      "from": "linfinity-space",
      "to": "norm",
      "label": "uses",
      "reason": "The supremum of absolute coordinate values supplies the norm on bounded sequences."
    },
    {
      "from": "young",
      "to": "conjugate-exponents",
      "label": "uses",
      "reason": "Young’s powers balance because the reciprocal exponents sum to one."
    },
    {
      "from": "holder",
      "to": "young",
      "label": "uses",
      "reason": "For interior exponents, applying Young to normalized coordinates and summing proves Hölder."
    },
    {
      "from": "holder",
      "to": "lp-space",
      "label": "uses",
      "reason": "Finite-p summability controls the normalized sums used in Hölder’s estimate."
    },
    {
      "from": "holder",
      "to": "linfinity-space",
      "label": "uses",
      "reason": "At an endpoint, the supremum norm bounds one factor uniformly over all coordinates."
    },
    {
      "from": "minkowski",
      "to": "holder",
      "label": "uses",
      "reason": "Hölder bounds the products appearing in the finite-truncation proof of the triangle inequality."
    },
    {
      "from": "minkowski",
      "to": "conjugate-exponents",
      "label": "uses",
      "reason": "The identity (p−1)p′=p matches the powers in the proof for interior exponents."
    },
    {
      "from": "minkowski",
      "to": "norm",
      "label": "implies",
      "reason": "Minkowski supplies the nontrivial triangle axiom for the sequence-space norms."
    },
    {
      "from": "lp-completeness",
      "to": "cauchy-sequence",
      "label": "uses",
      "reason": "The proof begins with a norm-Cauchy sequence and takes Cauchy limits in each scalar coordinate."
    },
    {
      "from": "lp-completeness",
      "to": "minkowski",
      "label": "uses",
      "reason": "The triangle inequality controls the size of the candidate limit using a known sequence element and their difference."
    },
    {
      "from": "lp-completeness",
      "to": "banach-space",
      "label": "implies",
      "reason": "Completeness together with the normed-space structure makes every lp space Banach."
    },
    {
      "from": "metric",
      "to": "cartesian-product",
      "label": "uses",
      "reason": "A metric assigns distances to ordered pairs in X × X."
    },
    {
      "from": "continuity-semicontinuity",
      "to": "semicontinuity",
      "label": "uses",
      "reason": "The two one-sided inequalities squeeze the liminf and limsup to the same value."
    },
    {
      "from": "continuity-semicontinuity",
      "to": "continuity-sequential-criterion",
      "label": "uses",
      "reason": "Convergence of all image sequences implies continuity in a metric space."
    },
    {
      "from": "continuity-semicontinuity",
      "to": "metric-continuity",
      "label": "characterises",
      "reason": "A real-valued function is continuous exactly when both semicontinuity conditions hold."
    },
    {
      "from": "ch2-pointwise",
      "to": "convergent-sequence",
      "label": "specialises",
      "reason": "At each input, pointwise convergence is ordinary scalar sequence convergence."
    },
    {
      "from": "ch2-uniform-norm",
      "to": "norm",
      "label": "specialises",
      "reason": "The supremum construction gives a concrete function-space norm."
    },
    {
      "from": "ch2-uniform-convergence",
      "to": "ch2-uniform-norm",
      "label": "uses",
      "reason": "Uniform convergence is convergence of the worst-case error to zero."
    },
    {
      "from": "ch2-uniform-implies-pointwise",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "The same error bound is available at every fixed input."
    },
    {
      "from": "ch2-uniform-implies-pointwise",
      "to": "ch2-pointwise",
      "label": "implies",
      "reason": "Every uniformly convergent sequence is pointwise convergent."
    },
    {
      "from": "ch2-uniform-limit-continuous",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "A single approximant controls the outer terms everywhere."
    },
    {
      "from": "ch2-uniform-limit-continuous",
      "to": "metric-continuity",
      "label": "uses",
      "reason": "Continuity of a fixed approximant controls the middle term."
    },
    {
      "from": "ch2-limit-integral",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "The integral error is bounded by interval length times uniform error."
    },
    {
      "from": "ch2-limit-integral",
      "to": "ch2-uniform-limit-continuous",
      "label": "uses",
      "reason": "The limit remains continuous and hence Riemann integrable."
    },
    {
      "from": "ch2-continuous-space",
      "to": "linear-space",
      "label": "specialises",
      "reason": "Continuous functions use pointwise vector operations."
    },
    {
      "from": "ch2-continuous-space",
      "to": "extreme-value",
      "label": "uses",
      "reason": "Compact domains make every continuous function bounded."
    },
    {
      "from": "ch2-continuous-space",
      "to": "ch2-uniform-norm",
      "label": "uses",
      "reason": "The chosen norm measures maximum function size."
    },
    {
      "from": "ch2-bounded-continuous",
      "to": "ch2-continuous-space",
      "label": "specialises",
      "reason": "Boundedness selects a subspace of continuous functions."
    },
    {
      "from": "ch2-ck-banach",
      "to": "banach-space",
      "label": "characterises",
      "reason": "The theorem establishes completeness of this normed function space."
    },
    {
      "from": "ch2-ck-banach",
      "to": "ch2-continuous-space",
      "label": "uses",
      "reason": "C(K) is the space in which the uniform limit must lie."
    },
    {
      "from": "ch2-ck-banach",
      "to": "ch2-uniform-limit-continuous",
      "label": "uses",
      "reason": "Uniform convergence keeps the limit continuous."
    },
    {
      "from": "ch2-ck-banach",
      "to": "cauchy-sequence",
      "label": "uses",
      "reason": "A uniform Cauchy estimate yields pointwise limits and then uniform convergence."
    },
    {
      "from": "ch2-cb-banach",
      "to": "ch2-bounded-continuous",
      "label": "uses",
      "reason": "A bounded approximant transfers boundedness to the uniform limit."
    },
    {
      "from": "ch2-cb-banach",
      "to": "ch2-uniform-limit-continuous",
      "label": "uses",
      "reason": "Uniform limits preserve continuity even on a noncompact domain."
    },
    {
      "from": "ch2-support",
      "to": "closure",
      "label": "uses",
      "reason": "Support is the closure of the nonzero set."
    },
    {
      "from": "ch2-compact-support",
      "to": "ch2-support",
      "label": "uses",
      "reason": "Membership requires the support to be compact."
    },
    {
      "from": "ch2-compact-support",
      "to": "compactness",
      "label": "uses",
      "reason": "Compactness of the support ensures boundedness of a continuous function."
    },
    {
      "from": "ch2-cc-incomplete",
      "to": "ch2-compact-support",
      "label": "uses",
      "reason": "The truncated Gaussian has compact support but its limit does not."
    },
    {
      "from": "ch2-cc-incomplete",
      "to": "closed-complete",
      "label": "uses",
      "reason": "A nonclosed subspace of a Banach space cannot be complete."
    },
    {
      "from": "ch2-cc-incomplete",
      "to": "ch2-cb-banach",
      "label": "uses",
      "reason": "The ambient bounded-continuous function space is Banach."
    },
    {
      "from": "ch2-c0",
      "to": "ch2-compact-support",
      "label": "uses",
      "reason": "C_0 is defined by uniformly closing C_c."
    },
    {
      "from": "ch2-c0",
      "to": "closed-complete",
      "label": "uses",
      "reason": "A closed subspace of the Banach space C_b is complete."
    },
    {
      "from": "ch2-weierstrass",
      "to": "dense-set",
      "label": "specialises",
      "reason": "Density is expressed in the supremum norm on C([a,b])."
    },
    {
      "from": "ch2-weierstrass",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "Polynomial approximation is uniform over the whole interval."
    },
    {
      "from": "ch2-equicontinuity",
      "to": "metric-continuity",
      "label": "strengthens",
      "reason": "One delta must work for every function in the family."
    },
    {
      "from": "ch2-arzela-ascoli",
      "to": "ch2-equicontinuity",
      "label": "uses",
      "reason": "Common control of oscillation is the extra compactness hypothesis."
    },
    {
      "from": "ch2-arzela-ascoli",
      "to": "compactness",
      "label": "characterises",
      "reason": "The theorem characterizes compact subsets of C(K)."
    },
    {
      "from": "ch2-arzela-ascoli",
      "to": "ch2-ck-banach",
      "label": "uses",
      "reason": "Uniformly Cauchy subsequences converge in C(K)."
    },
    {
      "from": "ch2-arzela-ascoli",
      "to": "ch2-diagonal",
      "label": "uses",
      "reason": "Dense-set extraction and equicontinuity supply uniform convergence."
    },
    {
      "from": "ch2-arzela-precompact",
      "to": "ch2-arzela-ascoli",
      "label": "specialises",
      "reason": "Dropping closedness allows limits in the closure of the family."
    },
    {
      "from": "ch2-arzela-precompact",
      "to": "precompactness",
      "label": "characterises",
      "reason": "Boundedness and equicontinuity ensure a compact closure."
    },
    {
      "from": "ch2-diagonal",
      "to": "compact-separable",
      "label": "uses",
      "reason": "A countable dense subset provides the diagonal extraction sites."
    },
    {
      "from": "ch2-diagonal",
      "to": "bolzano-weierstrass",
      "label": "uses",
      "reason": "Bounded scalar values have convergent subsequences at each sample point."
    },
    {
      "from": "ch2-diagonal",
      "to": "ch2-equicontinuity",
      "label": "uses",
      "reason": "Spatial control transfers convergence at finitely many points to the domain."
    },
    {
      "from": "ch2-diagonal",
      "to": "ch2-ck-banach",
      "label": "uses",
      "reason": "Uniform Cauchy convergence produces a continuous limit."
    },
    {
      "from": "ch2-unit-ball",
      "to": "ch2-uniform-limit-continuous",
      "label": "uses",
      "reason": "The discontinuous pointwise limit rules out uniform convergence."
    },
    {
      "from": "ch2-unit-ball",
      "to": "sequential-compactness",
      "label": "uses",
      "reason": "A sequence with no convergent subsequence disproves compactness."
    },
    {
      "from": "ch2-lipschitz",
      "to": "metric",
      "label": "uses",
      "reason": "The definition compares domain and codomain distances."
    },
    {
      "from": "ch2-lipschitz-constant",
      "to": "ch2-lipschitz",
      "label": "characterises",
      "reason": "The supremum of secant quotients is the optimal Lipschitz bound."
    },
    {
      "from": "ch2-lipschitz-uniform",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "A linear distance estimate gives delta equal to epsilon divided by L."
    },
    {
      "from": "ch2-lipschitz-uniform",
      "to": "uniform-continuity",
      "label": "implies",
      "reason": "Lipschitz maps have a point-independent continuity tolerance."
    },
    {
      "from": "ch2-lipschitz-compact",
      "to": "ch2-arzela-ascoli",
      "label": "uses",
      "reason": "Closedness, boundedness and common slope control prove compactness."
    },
    {
      "from": "ch2-lipschitz-compact",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "A fixed Lipschitz constant is a common modulus of continuity."
    },
    {
      "from": "ch2-lipschitz-compact",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "Uniform limits preserve the fixed Lipschitz and height bounds."
    },
    {
      "from": "ch2-derivative-precompact",
      "to": "ch2-arzela-precompact",
      "label": "uses",
      "reason": "Uniform bounds plus derivative-induced equicontinuity yield a compact closure."
    },
    {
      "from": "ch2-derivative-precompact",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "The mean-value theorem converts a derivative bound into a Lipschitz bound."
    },
    {
      "from": "ch2-cm-norm",
      "to": "ch2-uniform-norm",
      "label": "uses",
      "reason": "The norm sums uniform sizes of the function and its derivatives."
    },
    {
      "from": "ch2-cm-banach",
      "to": "ch2-cm-norm",
      "label": "uses",
      "reason": "The stronger C^m norm controls every derivative through order m."
    },
    {
      "from": "ch2-cm-banach",
      "to": "ch2-ck-banach",
      "label": "uses",
      "reason": "The function and derivative sequences each have continuous uniform limits."
    },
    {
      "from": "ch2-cm-banach",
      "to": "ch2-limit-integral",
      "label": "uses",
      "reason": "Passing to the limit in the integral identity identifies the derivative."
    },
    {
      "from": "ch2-smooth-sup-incomplete",
      "to": "closed-complete",
      "label": "uses",
      "reason": "A uniform limit outside the subspace shows it is not closed or complete."
    },
    {
      "from": "ch2-smooth-sup-incomplete",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "The limit square root has unbounded secant slopes at zero."
    },
    {
      "from": "ch2-smooth-sup-incomplete",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "The approximants converge in height while their slopes lose control."
    },
    {
      "from": "ch2-euler",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "The bounded vector field bounds every interpolation slope."
    },
    {
      "from": "ch2-peano",
      "to": "ch2-euler",
      "label": "uses",
      "reason": "Euler approximants have common height and Lipschitz bounds."
    },
    {
      "from": "ch2-peano",
      "to": "ch2-arzela-precompact",
      "label": "uses",
      "reason": "Uniformly bounded equicontinuous approximants yield a uniformly convergent subsequence."
    },
    {
      "from": "ch2-peano",
      "to": "ch2-limit-integral",
      "label": "uses",
      "reason": "The integral formulation passes to the uniformly convergent limit."
    },
    {
      "from": "ch2-contraction",
      "to": "ch2-lipschitz",
      "label": "specialises",
      "reason": "A contraction has Lipschitz factor strictly below one."
    },
    {
      "from": "ch2-banach-fixed-point",
      "to": "ch2-contraction",
      "label": "uses",
      "reason": "Geometric contraction makes the iterates Cauchy and guarantees uniqueness."
    },
    {
      "from": "ch2-banach-fixed-point",
      "to": "complete-space",
      "label": "uses",
      "reason": "Completeness ensures the Cauchy iterates converge inside the domain."
    },
    {
      "from": "ch2-banach-fixed-point",
      "to": "cauchy-sequence",
      "label": "uses",
      "reason": "Summing geometric step lengths gives the Cauchy estimate."
    },
    {
      "from": "ch2-odd-closed",
      "to": "closed-sequential-criterion",
      "label": "uses",
      "reason": "Uniformly convergent sequences of odd functions retain their limit in the set."
    },
    {
      "from": "ch2-odd-closed",
      "to": "ch2-uniform-implies-pointwise",
      "label": "uses",
      "reason": "Pointwise limits preserve the oddness identity."
    },
    {
      "from": "ch2-odd-closed",
      "to": "dense-set",
      "label": "uses",
      "reason": "A positive distance from the constant one disproves density."
    },
    {
      "from": "ch2-local-minimum",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "The cubic-plus-quadratic sequence converges uniformly but loses a local minimum."
    },
    {
      "from": "ch2-local-minimum",
      "to": "dense-set",
      "label": "uses",
      "reason": "Shrinking plateau modifications approximate arbitrary continuous functions."
    },
    {
      "from": "ch2-ode-precompact",
      "to": "ch2-arzela-precompact",
      "label": "uses",
      "reason": "The ODE supplies exactly the height and equicontinuity estimates required."
    },
    {
      "from": "ch2-ode-precompact",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "A derivative bounded by one gives a shared Lipschitz constant."
    },
    {
      "from": "ch2-mean-zero-bound",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "The slope bound controls the integral of differences from the average."
    },
    {
      "from": "ch2-c0-real",
      "to": "ch2-c0",
      "label": "characterises",
      "reason": "For real-line domains the closure definition is equivalent to uniformly small tails."
    },
    {
      "from": "ch2-c0-real",
      "to": "ch2-compact-support",
      "label": "uses",
      "reason": "Compactly supported approximants vanish outside bounded intervals."
    },
    {
      "from": "ch2-c0-real",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "Uniform error transfers a zero tail to a small tail."
    },
    {
      "from": "ch3-jordan",
      "to": "ch3-elementary-set",
      "label": "uses",
      "reason": "Inner and outer Jordan contents are built from finite elementary sets."
    },
    {
      "from": "ch3-jordan-boundary",
      "to": "ch3-jordan",
      "label": "sufficient for",
      "reason": "The null-boundary condition is a sufficient test for Jordan measurability."
    },
    {
      "from": "ch3-jordan-failure",
      "to": "ch3-jordan",
      "label": "contrasts with",
      "reason": "A countable union of Jordan-null sets need not remain Jordan measurable."
    },
    {
      "from": "ch3-jordan-failure",
      "to": "ch3-riemann",
      "label": "illustrates",
      "reason": "The associated rational indicator has distinct lower and upper Riemann integrals."
    },
    {
      "from": "ch3-measurable-set",
      "to": "ch3-jordan",
      "label": "extends",
      "reason": "Lebesgue approximation enlarges the class of measurable sets beyond finite elementary approximation."
    },
    {
      "from": "ch3-regularity",
      "to": "ch3-measurable-set",
      "label": "uses",
      "reason": "The regularity theorem identifies the measure using compact and open approximations."
    },
    {
      "from": "ch3-null-set",
      "to": "ch3-measurable-set",
      "label": "specialises",
      "reason": "Null sets are measurable sets whose volume is zero."
    },
    {
      "from": "ch3-finite-measure-operations",
      "to": "ch3-measurable-set",
      "label": "uses",
      "reason": "Closure and measure identities apply to measurable input sets."
    },
    {
      "from": "ch3-countable-measure",
      "to": "ch3-measurable-set",
      "label": "uses",
      "reason": "Countable operations remain inside the measurable collection."
    },
    {
      "from": "ch3-measure-below",
      "to": "ch3-countable-measure",
      "label": "uses",
      "reason": "Decompose the increasing union into disjoint increments and apply countable additivity."
    },
    {
      "from": "ch3-measure-above",
      "to": "ch3-measure-below",
      "label": "uses",
      "reason": "Apply continuity from below to complements inside the finite initial set."
    },
    {
      "from": "ch3-measure-above",
      "to": "ch3-finite-measure-operations",
      "label": "uses",
      "reason": "The difference identity transfers the increasing-complement result to decreasing sets."
    },
    {
      "from": "ch3-translation",
      "to": "ch3-measurable-set",
      "label": "preserves",
      "reason": "Translating a measurable set preserves measurability and its volume."
    },
    {
      "from": "ch3-countable-null",
      "to": "ch3-countable-measure",
      "label": "uses",
      "reason": "Countable subadditivity bounds the measure of the union by a sum of zeros."
    },
    {
      "from": "ch3-countable-null",
      "to": "ch3-null-set",
      "label": "uses",
      "reason": "Every component has zero measure by the definition of a null set."
    },
    {
      "from": "ch3-measurable-function",
      "to": "ch3-measurable-set",
      "label": "uses",
      "reason": "Each superlevel set is required to be Lebesgue measurable."
    },
    {
      "from": "ch3-measurability-tests",
      "to": "ch3-countable-measure",
      "label": "uses",
      "reason": "Boolean operations and countable limits convert threshold inequalities into one another."
    },
    {
      "from": "ch3-measurability-tests",
      "to": "ch3-measurable-function",
      "label": "characterises",
      "reason": "The alternative threshold tests describe the same measurable functions."
    },
    {
      "from": "ch3-measurable-arithmetic",
      "to": "ch3-measurable-function",
      "label": "preserves",
      "reason": "Defined arithmetic and positive or negative parts preserve measurability."
    },
    {
      "from": "ch3-measurable-limits",
      "to": "ch3-countable-measure",
      "label": "uses",
      "reason": "Level sets of countable suprema and infima use countable set operations."
    },
    {
      "from": "ch3-measurable-limits",
      "to": "ch3-measurable-function",
      "label": "preserves",
      "reason": "Countable limit operations preserve measurable level sets."
    },
    {
      "from": "ch3-simple-function",
      "to": "ch3-measurable-function",
      "label": "specialises",
      "reason": "Simple functions are measurable functions with finite range."
    },
    {
      "from": "ch3-simple-integral",
      "to": "ch3-simple-function",
      "label": "uses",
      "reason": "Disjoint measurable level sets give the finite weighted volume sum."
    },
    {
      "from": "ch3-simple-approximation",
      "to": "ch3-simple-function",
      "label": "uses",
      "reason": "Range slicing produces finitely many measurable levels."
    },
    {
      "from": "ch3-simple-approximation",
      "to": "ch3-measurability-tests",
      "label": "uses",
      "reason": "The horizontal-band sets are intersections of measurable threshold sets."
    },
    {
      "from": "ch3-nonnegative-integral",
      "to": "ch3-simple-integral",
      "label": "uses",
      "reason": "The nonnegative integral is the supremum over simple lower integrals."
    },
    {
      "from": "ch3-signed-integral",
      "to": "ch3-nonnegative-integral",
      "label": "uses",
      "reason": "Integrate the positive and negative parts separately before subtracting."
    },
    {
      "from": "ch3-signed-integral",
      "to": "ch3-measurable-arithmetic",
      "label": "uses",
      "reason": "Positive and negative parts are measurable nonnegative functions."
    },
    {
      "from": "ch3-integral-over-set",
      "to": "ch3-simple-function",
      "label": "uses",
      "reason": "An indicator restricts the contribution to the selected measurable domain."
    },
    {
      "from": "ch3-integral-properties",
      "to": "ch3-signed-integral",
      "label": "uses",
      "reason": "Summability makes the linear combinations and signed integrals finite."
    },
    {
      "from": "ch3-almost-everywhere",
      "to": "ch3-null-set",
      "label": "uses",
      "reason": "An almost-everywhere assertion may fail only on a null set."
    },
    {
      "from": "ch3-null-integral",
      "to": "ch3-simple-integral",
      "label": "uses",
      "reason": "Every simple approximation integrates to zero on a null set."
    },
    {
      "from": "ch3-null-integral",
      "to": "ch3-nonnegative-integral",
      "label": "uses",
      "reason": "Take the supremum over simple approximations after restricting to the null set."
    },
    {
      "from": "ch3-zero-on-every-set",
      "to": "ch3-integral-over-set",
      "label": "uses",
      "reason": "Testing every measurable restriction detects positive and negative mass separately."
    },
    {
      "from": "ch3-monotone-convergence",
      "to": "ch3-measure-below",
      "label": "uses",
      "reason": "Increasing intersections with simple-function levels exhaust their positive-volume contribution."
    },
    {
      "from": "ch3-monotone-convergence",
      "to": "ch3-nonnegative-integral",
      "label": "uses",
      "reason": "Simple lower approximations establish the reverse integral inequality."
    },
    {
      "from": "ch3-monotone-convergence",
      "to": "ch3-countable-null",
      "label": "uses",
      "reason": "A countable union yields one exceptional set outside which all inequalities hold."
    },
    {
      "from": "ch3-monotone-convergence",
      "to": "ch3-null-integral",
      "label": "uses",
      "reason": "Changing the approximants on a common null set leaves the integrals unchanged."
    },
    {
      "from": "ch3-markov",
      "to": "ch3-integral-properties",
      "label": "uses",
      "reason": "Integrate the bound λ1_{f≥λ} ≤ f using monotonicity."
    },
    {
      "from": "ch3-fubini",
      "to": "ch3-signed-integral",
      "label": "uses",
      "reason": "Summability of the full function controls the almost-everywhere section integrals."
    },
    {
      "from": "ch3-fatou",
      "to": "ch3-monotone-convergence",
      "label": "uses",
      "reason": "The tail infima increase to the pointwise lower limit."
    },
    {
      "from": "ch3-fatou",
      "to": "ch3-measurable-limits",
      "label": "uses",
      "reason": "Each tail infimum and the resulting lower limit are measurable."
    },
    {
      "from": "ch3-dominated-convergence",
      "to": "ch3-fatou",
      "label": "uses",
      "reason": "Apply Fatou to g−f_n and g+f_n to squeeze the integral limits."
    },
    {
      "from": "ch3-dominated-convergence",
      "to": "ch3-signed-integral",
      "label": "uses",
      "reason": "The dominating function has finite integral, allowing legitimate subtraction."
    },
    {
      "from": "ch3-dominated-convergence",
      "to": "ch3-almost-everywhere",
      "label": "uses",
      "reason": "The limit exists outside one null set, which does not affect the integrals."
    },
    {
      "from": "ch3-concentration",
      "to": "ch3-fatou",
      "label": "illustrates",
      "reason": "Concentration makes Fatou’s inequality strict while a.e. convergence still holds."
    },
    {
      "from": "ch3-concentration",
      "to": "ch3-dominated-convergence",
      "label": "contrasts with",
      "reason": "No single summable envelope can dominate these spikes."
    },
    {
      "from": "ch3-travelling-mass",
      "to": "ch3-fatou",
      "label": "illustrates",
      "reason": "Mass travelling to infinity makes the pointwise-limit integral smaller."
    },
    {
      "from": "ch3-travelling-mass",
      "to": "ch3-dominated-convergence",
      "label": "contrasts with",
      "reason": "The common constant bound on the infinite domain is not integrable."
    },
    {
      "from": "ch3-lp-quantity",
      "to": "ch3-nonnegative-integral",
      "label": "uses",
      "reason": "The quantity integrates the nonnegative measurable power |f|^p."
    },
    {
      "from": "ch3-essential-supremum",
      "to": "ch3-almost-everywhere",
      "label": "uses",
      "reason": "Essential upper bounds disregard one null exceptional set."
    },
    {
      "from": "ch3-essential-bound",
      "to": "ch3-countable-null",
      "label": "uses",
      "reason": "Union the exceptional sets for bounds M+1/k to prove the limit bound a.e."
    },
    {
      "from": "ch3-essential-bound",
      "to": "ch3-essential-supremum",
      "label": "uses",
      "reason": "The value M is the infimum of the essential upper bounds."
    },
    {
      "from": "ch3-continuous-essential",
      "to": "ch3-essential-supremum",
      "label": "uses",
      "reason": "Continuity turns a pointwise excess above a proposed bound into positive-measure excess."
    },
    {
      "from": "ch3-holder",
      "to": "ch3-lp-quantity",
      "label": "uses",
      "reason": "Conjugate powered integrals control the two factors."
    },
    {
      "from": "ch3-holder",
      "to": "ch3-essential-bound",
      "label": "uses",
      "reason": "The endpoint argument uses the actual a.e. upper bound provided by the essential supremum."
    },
    {
      "from": "ch3-weighted-product",
      "to": "ch3-holder",
      "label": "uses",
      "reason": "Use exponents 1/α and 1/β on |f|^α and |g|^β."
    },
    {
      "from": "ch3-minkowski",
      "to": "ch3-holder",
      "label": "uses",
      "reason": "Hölder estimates the two product terms involving |f+g|^{p−1}."
    },
    {
      "from": "ch3-minkowski",
      "to": "ch3-essential-bound",
      "label": "uses",
      "reason": "At p=∞, add the two a.e. essential bounds before taking the essential supremum."
    },
    {
      "from": "ch3-lp-space",
      "to": "ch3-equivalence-quotient",
      "label": "uses",
      "reason": "Equality almost everywhere is compatible with the vector operations on equivalence classes."
    },
    {
      "from": "ch3-lp-space",
      "to": "ch3-null-integral",
      "label": "uses",
      "reason": "Null-set changes do not alter the integral quantities, so the norm is independent of representative."
    },
    {
      "from": "ch3-lp-space",
      "to": "ch3-minkowski",
      "label": "uses",
      "reason": "The triangle inequality supplies normed-space structure and closure under addition."
    },
    {
      "from": "ch3-lp-space",
      "to": "ch3-essential-supremum",
      "label": "uses",
      "reason": "The p=∞ member of the family uses the essential-supremum norm."
    },
    {
      "from": "ch3-lp-convergence",
      "to": "ch3-lp-space",
      "label": "uses",
      "reason": "Convergence is defined using the norm on a.e. equivalence classes."
    },
    {
      "from": "ch3-riesz-fischer",
      "to": "ch3-lp-space",
      "label": "uses",
      "reason": "The complete normed spaces are the quotient spaces Lp."
    },
    {
      "from": "ch3-ae-subsequence",
      "to": "ch3-riesz-fischer",
      "label": "strengthens",
      "reason": "For finite p the recorded theorem also provides a dominated a.e.-convergent subsequence."
    },
    {
      "from": "ch3-ae-subsequence",
      "to": "ch3-almost-everywhere",
      "label": "uses",
      "reason": "The selected representatives converge outside a common null set."
    },
    {
      "from": "ch3-typewriter",
      "to": "ch3-lp-convergence",
      "label": "illustrates",
      "reason": "The shrinking dyadic support gives convergence to zero in every finite-p norm."
    },
    {
      "from": "ch3-typewriter",
      "to": "ch3-ae-subsequence",
      "label": "contrasts with",
      "reason": "Failure for the full sequence is compatible with a well-behaved selected subsequence."
    },
    {
      "from": "ch3-convergence-comparison",
      "to": "ch3-typewriter",
      "label": "uses",
      "reason": "The typewriter example disproves full-sequence a.e. convergence from finite-p norm convergence."
    },
    {
      "from": "ch3-convergence-comparison",
      "to": "ch3-concentration",
      "label": "uses",
      "reason": "The concentrating example disproves L1 convergence from a.e. convergence."
    },
    {
      "from": "ch3-set-distance",
      "to": "ch3-geometry-topic",
      "label": "supports",
      "reason": "Set distance measures the margin needed for compact-neighbourhood constructions."
    },
    {
      "from": "ch3-distance-lipschitz",
      "to": "ch3-set-distance",
      "label": "uses",
      "reason": "Take infima in the triangle inequality to control distance functions."
    },
    {
      "from": "ch3-positive-separation",
      "to": "ch3-distance-lipschitz",
      "label": "uses",
      "reason": "Continuity makes the positive distance function attain a minimum on the compact set."
    },
    {
      "from": "ch3-compact-buffer",
      "to": "ch3-positive-separation",
      "label": "uses",
      "reason": "Positive distance from the complement gives a uniform allowed thickness."
    },
    {
      "from": "ch3-compact-buffer",
      "to": "ch3-distance-lipschitz",
      "label": "uses",
      "reason": "The closed sublevel set of the continuous distance function is closed."
    },
    {
      "from": "ch3-holder",
      "to": "young",
      "label": "uses",
      "reason": "The interior-exponent proof applies scaled Young inequality to the factors."
    },
    {
      "from": "ch3-holder",
      "to": "conjugate-exponents",
      "label": "uses",
      "reason": "The reciprocal identity matches the two powers in the integral estimate."
    },
    {
      "from": "ch3-holder",
      "to": "holder",
      "label": "parallels",
      "reason": "Integral Hölder is the function-space counterpart of the earlier sequence inequality."
    },
    {
      "from": "ch3-minkowski",
      "to": "minkowski",
      "label": "parallels",
      "reason": "The integral triangle proof follows the same Hölder mechanism as the sequence-space proof."
    },
    {
      "from": "ch3-riesz-fischer",
      "to": "banach-space",
      "label": "establishes",
      "reason": "Riesz–Fischer asserts completeness of the normed Lp spaces."
    },
    {
      "from": "ch3-riesz-fischer",
      "to": "cauchy-sequence",
      "label": "uses",
      "reason": "The theorem starts with a sequence Cauchy in the Lp norm."
    },
    {
      "from": "ch3-positive-separation",
      "to": "extreme-value",
      "label": "uses",
      "reason": "A continuous function on a nonempty compact set attains its minimum."
    },
    {
      "from": "ch3-compact-buffer",
      "to": "heine-borel",
      "label": "uses",
      "reason": "The closed bounded Euclidean neighbourhood is compact."
    },
    {
      "from": "ch3-set-distance",
      "to": "distance-to-set",
      "label": "extends",
      "reason": "The point-to-set infimum is now also minimized over the first set."
    },
    {
      "from": "ch3-fatou",
      "to": "limsup-liminf",
      "label": "uses",
      "reason": "The lower limit is the supremum of the tail infima."
    },
    {
      "from": "ch3-distance-lipschitz",
      "to": "ch2-lipschitz",
      "label": "uses",
      "reason": "The distance estimate is precisely the Lipschitz condition with constant one."
    },
    {
      "from": "ch3-continuous-essential",
      "to": "ch2-continuous-space",
      "label": "uses",
      "reason": "Continuity turns a strict pointwise lower bound into a lower bound on a neighbourhood of positive measure."
    },
    {
      "from": "ch3-essential-supremum",
      "to": "ch2-uniform-norm",
      "label": "contrasts with",
      "reason": "The supremum sees every point; the essential supremum ignores exceptional sets of Lebesgue measure zero."
    },
    {
      "from": "ch3-convergence-comparison",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "Uniform convergence controls the error at all points and therefore also controls its essential supremum."
    },
    {
      "from": "ch3-convergence-comparison",
      "to": "ch2-pointwise",
      "label": "uses",
      "reason": "Pointwise convergence concerns every fixed point, while almost-everywhere convergence allows a null exceptional set."
    },
    {
      "from": "ch3-dominated-convergence",
      "to": "ch2-limit-integral",
      "label": "compares with",
      "reason": "Both results permit an exchange of limit and integral: uniform error control on a compact interval contrasts with one integrable envelope and almost-everywhere convergence."
    },
    {
      "from": "ch3-simple-approximation",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "Slicing a bounded range gives an error bound independent of the input point, which is uniform convergence."
    },
    {
      "from": "ch3-riemann-uniform-limit",
      "to": "ch3-riemann",
      "label": "preserves",
      "reason": "The Darboux upper-lower gap stays arbitrarily small under uniform limits of Riemann-integrable functions."
    },
    {
      "from": "ch3-riemann-uniform-limit",
      "to": "ch2-uniform-convergence",
      "label": "uses",
      "reason": "One uniform bound controls all rectangle height errors and the integral difference."
    },
    {
      "from": "ch3-subgraph-volume",
      "to": "ch3-riemann",
      "label": "uses",
      "reason": "Lower and upper Riemann sums squeeze the subgraph volume."
    },
    {
      "from": "ch3-subgraph-volume",
      "to": "ch3-jordan",
      "label": "uses",
      "reason": "Jordan inner and outer volumes coincide under the Riemann-sum squeeze."
    },
    {
      "from": "ch3-regularity-gap",
      "to": "ch3-regularity",
      "label": "rephrases",
      "reason": "Compact and open approximations can be chosen with arbitrarily small total gap."
    },
    {
      "from": "ch3-jordan-lebesgue-agreement",
      "to": "ch3-jordan",
      "label": "uses",
      "reason": "Coincident Jordan endpoints squeeze the Lebesgue inner and outer measures."
    },
    {
      "from": "ch3-nonmeasurable",
      "to": "ch3-countable-measure",
      "label": "uses",
      "reason": "Countably many disjoint rational translates force zero or infinite union measure."
    },
    {
      "from": "ch3-nonmeasurable",
      "to": "ch3-translation",
      "label": "uses",
      "reason": "All rational translates would have the same measure."
    },
    {
      "from": "ch3-cutoff",
      "to": "ch3-compact-buffer",
      "label": "uses",
      "reason": "A compact buffer supplies an allowed support neighbourhood inside the domain."
    },
    {
      "from": "ch3-cutoff",
      "to": "ch3-distance-lipschitz",
      "label": "uses",
      "reason": "A continuous distance function yields a continuous cutoff."
    },
    {
      "from": "ch3-simple-density",
      "to": "ch3-dominated-convergence",
      "label": "uses",
      "reason": "The approximation error powers are dominated by the integrable |f|^p."
    },
    {
      "from": "ch3-simple-density",
      "to": "ch3-simple-approximation",
      "label": "extends",
      "reason": "Truncating height and domain extends bounded-range simple approximation to general Lp."
    },
    {
      "from": "ch3-cc-density",
      "to": "ch3-simple-density",
      "label": "uses",
      "reason": "It is enough to approximate the finitely many indicators of a simple function."
    },
    {
      "from": "ch3-cc-density",
      "to": "ch3-regularity-gap",
      "label": "uses",
      "reason": "Regularity makes the continuous transition region have small measure."
    },
    {
      "from": "ch3-cc-density",
      "to": "ch3-cutoff",
      "label": "uses",
      "reason": "A cutoff approximates each measurable indicator between its compact and open approximations."
    },
    {
      "from": "ch3-cc-not-linfinity-dense",
      "to": "ch3-continuous-essential",
      "label": "uses",
      "reason": "Continuous functions cannot hide a positive discrepancy on an open region in a null set."
    },
    {
      "from": "ch3-simple-linfinity-density",
      "to": "ch3-simple-approximation",
      "label": "uses",
      "reason": "Quantizing a bounded range gives a uniform error bound."
    },
    {
      "from": "ch3-lp-separable",
      "to": "ch3-simple-density",
      "label": "uses",
      "reason": "Approximate simple-function coefficients and level sets by countably many rational choices."
    },
    {
      "from": "ch3-lp-separable",
      "to": "separable-space",
      "label": "establishes",
      "reason": "The resulting countable dense family gives separability."
    },
    {
      "from": "ch3-linfinity-nonseparable",
      "to": "separable-space",
      "label": "contrasts with",
      "reason": "Uncountably many disjoint open balls preclude any countable dense subset."
    },
    {
      "from": "ch3-finite-measure-embedding",
      "to": "ch3-holder",
      "label": "uses",
      "reason": "Hölder applied to |f|^p and one gives the volume factor."
    },
    {
      "from": "ch3-lp-no-global-inclusion",
      "to": "ch3-finite-measure-embedding",
      "label": "contrasts with",
      "reason": "Infinite-domain singularities and tails defeat the finite-volume exponent ordering."
    },
    {
      "from": "ch3-local-inclusions",
      "to": "ch3-local-lp",
      "label": "uses",
      "reason": "Local membership is tested on compact sets."
    },
    {
      "from": "ch3-local-inclusions",
      "to": "ch3-finite-measure-embedding",
      "label": "uses",
      "reason": "Each compact set has finite measure, allowing the exponent comparison."
    },
    {
      "from": "ch3-convolution",
      "to": "ch3-local-lp",
      "label": "contrasts with",
      "reason": "Global convolution estimates need global norms, while compact kernels later allow local integrability."
    },
    {
      "from": "ch3-young-convolution",
      "to": "ch3-convolution",
      "label": "controls",
      "reason": "Young supplies a norm estimate and existence almost everywhere for the convolution integral."
    },
    {
      "from": "ch3-young-convolution",
      "to": "ch3-fubini",
      "label": "uses",
      "reason": "Swapping integrals factors the total absolute integral in the p=1 proof."
    },
    {
      "from": "ch3-young-convolution",
      "to": "ch3-holder",
      "label": "uses",
      "reason": "Weighted Hölder controls the interior-p convolution integral."
    },
    {
      "from": "ch3-convolution-pairing",
      "to": "ch3-young-convolution",
      "label": "uses",
      "reason": "Young and Hölder make the double integral absolutely integrable."
    },
    {
      "from": "ch3-convolution-pairing",
      "to": "ch3-fubini",
      "label": "uses",
      "reason": "Interchanging the integration order produces the reflected kernel."
    },
    {
      "from": "ch3-essential-support",
      "to": "ch3-countable-null",
      "label": "uses",
      "reason": "A countable topological basis reduces the zero-neighbourhood union to countably many null exceptions."
    },
    {
      "from": "ch3-support-agreement",
      "to": "ch3-essential-support",
      "label": "characterises",
      "reason": "For continuous functions the a.e. support coincides with closure of the nonzero set."
    },
    {
      "from": "ch3-support-agreement",
      "to": "ch2-support",
      "label": "matches",
      "reason": "The essential-support definition extends the earlier continuous-function support."
    },
    {
      "from": "ch3-support-convolution",
      "to": "ch3-essential-support",
      "label": "uses",
      "reason": "Convolution vanishes on open regions outside the closed support sum."
    },
    {
      "from": "ch3-support-convolution",
      "to": "ch3-convolution",
      "label": "uses",
      "reason": "A nonzero integrand requires simultaneous membership in two translated supports."
    },
    {
      "from": "ch3-convolution-continuity",
      "to": "ch3-modulus",
      "label": "uses",
      "reason": "The modulus controls all translated kernel differences on a common compact integration region."
    },
    {
      "from": "ch3-convolution-continuity",
      "to": "ch3-local-lp",
      "label": "uses",
      "reason": "Local L1 makes the integral over that compact region finite."
    },
    {
      "from": "ch3-convolution-derivatives",
      "to": "ch3-convolution-continuity",
      "label": "uses",
      "reason": "Convolutions with the derivative kernels are continuous."
    },
    {
      "from": "ch3-convolution-derivatives",
      "to": "ch3-modulus",
      "label": "uses",
      "reason": "Uniform continuity of the derivatives controls the first-order remainder."
    },
    {
      "from": "ch3-mollifier-uniform",
      "to": "ch3-mollifier",
      "label": "uses",
      "reason": "Unit mass and support radius1/n bound the averaging error."
    },
    {
      "from": "ch3-mollifier-uniform",
      "to": "ch3-modulus",
      "label": "uses",
      "reason": "The compact-region modulus tends to zero as the averaging radius shrinks."
    },
    {
      "from": "ch3-mollifier-lp",
      "to": "ch3-cc-density",
      "label": "uses",
      "reason": "First replace an Lp function with a nearby continuous compactly supported function."
    },
    {
      "from": "ch3-mollifier-lp",
      "to": "ch3-mollifier-uniform",
      "label": "uses",
      "reason": "The continuous approximation converges uniformly on a common compact support neighbourhood."
    },
    {
      "from": "ch3-mollifier-lp",
      "to": "ch3-young-convolution",
      "label": "uses",
      "reason": "Young transfers the error from the original function to its continuous approximation."
    },
    {
      "from": "ch3-smooth-density",
      "to": "ch3-mollifier-lp",
      "label": "uses",
      "reason": "Mollification approximates a compactly supported function in finite Lp norm."
    },
    {
      "from": "ch3-smooth-density",
      "to": "ch3-convolution-derivatives",
      "label": "uses",
      "reason": "A smooth kernel supplies arbitrary derivatives to the approximation."
    },
    {
      "from": "ch3-smooth-density",
      "to": "ch3-support-convolution",
      "label": "uses",
      "reason": "Small kernel support keeps the approximation inside the open domain."
    },
    {
      "from": "ch3-test-functions-detect",
      "to": "ch3-mollifier-lp",
      "label": "uses",
      "reason": "Bounded compact probes can be approximated in L1 by smooth probes."
    },
    {
      "from": "ch3-test-functions-detect",
      "to": "ch3-ae-subsequence",
      "label": "uses",
      "reason": "An L1-convergent sequence has an a.e.-convergent subsequence."
    },
    {
      "from": "ch3-test-functions-detect",
      "to": "ch3-dominated-convergence",
      "label": "uses",
      "reason": "A common bounded support and supremum bound allow passing the pairing with local L1 u to the limit."
    },
    {
      "from": "ch3-translation-operator",
      "to": "ch3-cc-density",
      "label": "uses",
      "reason": "Prove translation continuity first on continuous compact functions and then transfer by density."
    },
    {
      "from": "ch3-uniform-translation",
      "to": "ch3-translation-operator",
      "label": "strengthens",
      "reason": "One common shift scale is required for the whole family."
    },
    {
      "from": "ch3-kolmogorov-local",
      "to": "ch3-uniform-translation",
      "label": "uses",
      "reason": "Uniform translation control makes all smoothing errors small at one common scale."
    },
    {
      "from": "ch3-kolmogorov-local",
      "to": "ch2-arzela-ascoli",
      "label": "uses",
      "reason": "For a fixed smoothing scale the family is bounded and equicontinuous on a compact ball."
    },
    {
      "from": "ch3-kolmogorov-local",
      "to": "ch3-young-convolution",
      "label": "uses",
      "reason": "Convolution estimates control the smoothed family."
    },
    {
      "from": "ch3-kolmogorov-local",
      "to": "ch3-riesz-fischer",
      "label": "uses",
      "reason": "Completeness turns total boundedness into relative compactness."
    },
    {
      "from": "ch3-kolmogorov-global",
      "to": "ch3-kolmogorov-local",
      "label": "uses",
      "reason": "Find finite approximating families on a sufficiently large ball."
    },
    {
      "from": "ch3-kolmogorov-global",
      "to": "ch3-tightness",
      "label": "uses",
      "reason": "A single tail bound extends local finite approximants to global ones."
    },
    {
      "from": "ch3-escaping-translates",
      "to": "ch3-uniform-translation",
      "label": "illustrates",
      "reason": "Translations preserve a common small-shift estimate despite mass escaping."
    },
    {
      "from": "ch3-escaping-translates",
      "to": "ch3-tightness",
      "label": "contrasts with",
      "reason": "No bounded region captures the mass of all far-away translates."
    },
    {
      "from": "ch3-convolution-compactness",
      "to": "ch3-translation-operator",
      "label": "uses",
      "reason": "The fixed L1 kernel is continuous under translations in L1 norm."
    },
    {
      "from": "ch3-convolution-compactness",
      "to": "ch3-young-convolution",
      "label": "uses",
      "reason": "Young turns the kernel translation estimate into a uniform estimate for the convolution family."
    },
    {
      "from": "ch3-convolution-compactness",
      "to": "ch3-kolmogorov-local",
      "label": "uses",
      "reason": "Boundedness and uniform translation continuity give compact finite-measure restrictions."
    },
    {
      "from": "ch3-fatou-negative",
      "to": "ch3-fatou",
      "label": "contrasts with",
      "reason": "Negative travelling mass violates the nonnegativity hypothesis and reverses the inequality."
    },
    {
      "from": "ch3-indicator-measurability",
      "to": "ch3-measurable-function",
      "label": "characterises",
      "reason": "The threshold at1/2 recovers the measurable set from its indicator."
    },
    {
      "from": "ch3-ae-nonnegative-limit",
      "to": "ch3-countable-null",
      "label": "uses",
      "reason": "A countable union gives one exceptional set outside which all signs and the limit hold."
    },
    {
      "from": "ch3-integrable-tail",
      "to": "ch3-dominated-convergence",
      "label": "uses",
      "reason": "The tail indicators tend to zero under the integrable absolute-value bound."
    },
    {
      "from": "ch3-holder-general-product",
      "to": "ch3-holder",
      "label": "uses",
      "reason": "Apply Hölder after raising the product to its target rth power."
    },
    {
      "from": "ch3-radial-power-test",
      "to": "ch3-lp-quantity",
      "label": "uses",
      "reason": "The powered radial integral decides finite Lp membership."
    },
    {
      "from": "ch3-power-log-test",
      "to": "ch3-radial-power-test",
      "label": "refines",
      "reason": "A logarithm decides the critical power endpoint where the unmodified power integral diverges."
    },
    {
      "from": "ch3-scaling-peaks",
      "to": "ch3-lp-quantity",
      "label": "uses",
      "reason": "Change variables in the pth-power integral to separate height and volume factors."
    },
    {
      "from": "ch3-convergence-exercise-method",
      "to": "ch3-convergence-comparison",
      "label": "illustrates",
      "reason": "Pointwise, integral, and uniform behaviours require separate checks."
    },
    {
      "from": "ch3-lp-membership-first",
      "to": "ch3-lp-space",
      "label": "uses",
      "reason": "Norm convergence is a statement about elements of the normed function space."
    },
    {
      "from": "ch3-exercise11-correction",
      "to": "ch3-scaling-peaks",
      "label": "uses",
      "reason": "The central height grows faster than its shrinking width can make the error disappear."
    }
  ],
  "scope": {
    "primary": "Current RFA class-note transcriptions, 22 September–6 October 2026. Chapter 1 content only.",
    "secondary": "Di Francesco, Notes 2025_2026, Chapter 1 §§1.1–1.8, printed pages 11–37; used as a mathematical cross-check and numbered concordance.",
    "provenance": "AI-authored study adaptation. Precise statements follow current lecture coverage; intuition and examples are AI-authored, not lecture quotations.",
    "omittedArchivedOnly": [
      "Corollary 1.77 as a separate card: the current 6 October transcription instead states that every linear subspace of a finite-dimensional normed space is Banach.",
      "Ordinary exercise catalogue and later function-space material are outside this chapter deck."
    ],
    "topicNodeIds": {
      "1.1": "metrics-norms",
      "1.2": "convergence-topic",
      "1.3": "continuity-topic",
      "1.4": "topology-topic",
      "1.5": "metric-topology-topic",
      "1.6": "compactness-topic",
      "1.7": "finite-dimensional-topic",
      "1.8": "sequence-spaces-topic"
    }
  },
  "chapters": [
    {
      "id": "1",
      "title": "Metrics, norms, topologies",
      "shortTitle": "Basics",
      "partial": false,
      "dateRange": "22 Sep – 6 Oct 2026",
      "coverageNote": "Chapter 1 concepts recorded in the current lecture transcriptions.",
      "lectureDates": [
        "2026-09-22",
        "2026-09-23",
        "2026-09-29",
        "2026-09-30",
        "2026-10-02",
        "2026-10-05",
        "2026-10-06"
      ]
    },
    {
      "id": "2",
      "title": "Spaces of continuous functions",
      "shortTitle": "Functions",
      "partial": false,
      "dateRange": "6 – 27 Oct 2026",
      "coverageNote": "Continuous-function spaces and their applications, including the later recorded exercises.",
      "lectureDates": [
        "2026-10-06",
        "2026-10-07",
        "2026-10-09",
        "2026-10-13",
        "2026-10-27"
      ]
    },
    {
      "id": "3",
      "title": "Measure, integration & Lᵖ spaces",
      "shortTitle": "Measures",
      "partial": true,
      "dateRange": "13 – 28 Oct 2026",
      "coverageNote": "Full archived Chapter 3 is included. Cards marked “Ahead of lectures” are not yet confirmed by current transcriptions, which run through 28 October.",
      "lectureDates": [
        "2026-10-16",
        "2026-10-20",
        "2026-10-21",
        "2026-10-23",
        "2026-10-26",
        "2026-10-28"
      ],
      "archiveComplete": true
    }
  ],
  "oralExam": {
    "source": {
      "title": "RFA — List of possible questions for the Oral Exam",
      "chapters": [
        "1",
        "2",
        "3"
      ],
      "updated": "2026-11-05",
      "authors": [
        "Marco Di Francesco",
        "Maicol Caponi"
      ],
      "pages": 5
    },
    "longFormChoices": {
      "1": 1,
      "2": 1,
      "3": 5
    },
    "questions": [
      {
        "id": "1.1",
        "chapter": "1",
        "number": 1,
        "kind": "regular",
        "title": "Definition of a metric space.",
        "nodeIds": [
          "metric"
        ]
      },
      {
        "id": "1.2",
        "chapter": "1",
        "number": 2,
        "kind": "regular",
        "title": "Definition of a norm.",
        "nodeIds": [
          "norm"
        ]
      },
      {
        "id": "1.3",
        "chapter": "1",
        "number": 3,
        "kind": "regular",
        "title": "Definition of the distance induced by a norm, and proof that it is a distance.",
        "nodeIds": [
          "induced-metric"
        ]
      },
      {
        "id": "1.4",
        "chapter": "1",
        "number": 4,
        "kind": "regular",
        "title": "Definition of a convergent sequence in a metric space.",
        "nodeIds": [
          "convergent-sequence"
        ]
      },
      {
        "id": "1.5",
        "chapter": "1",
        "number": 5,
        "kind": "regular",
        "title": "Proof that the limit of a convergent sequence in a metric space is unique.",
        "nodeIds": [
          "unique-metric-limit"
        ]
      },
      {
        "id": "1.6",
        "chapter": "1",
        "number": 6,
        "kind": "regular",
        "title": "Definitions of a complete metric space and a Banach space.",
        "nodeIds": [
          "complete-space",
          "banach-space"
        ]
      },
      {
        "id": "1.7",
        "chapter": "1",
        "number": 7,
        "kind": "regular",
        "title": "Definition of a continuous function between two metric spaces.",
        "nodeIds": [
          "metric-continuity"
        ]
      },
      {
        "id": "1.8",
        "chapter": "1",
        "number": 8,
        "kind": "regular",
        "title": "Proof that the distance function is continuous.",
        "nodeIds": [
          "reverse-triangle"
        ]
      },
      {
        "id": "1.9",
        "chapter": "1",
        "number": 9,
        "kind": "regular",
        "title": "Definition of a sequentially continuous function between two metric spaces.",
        "nodeIds": [
          "sequential-continuity"
        ]
      },
      {
        "id": "1.10",
        "chapter": "1",
        "number": 10,
        "kind": "regular",
        "title": "Definition of a topological space.",
        "nodeIds": [
          "topological-space"
        ]
      },
      {
        "id": "1.11",
        "chapter": "1",
        "number": 11,
        "kind": "regular",
        "title": "Definitions of the closure of a set and a dense subset of a topological space.",
        "nodeIds": [
          "closure",
          "dense-set"
        ]
      },
      {
        "id": "1.12",
        "chapter": "1",
        "number": 12,
        "kind": "regular",
        "title": "Definition of the standard topology in a metric space.",
        "nodeIds": [
          "metric-open-set",
          "metric-topology"
        ]
      },
      {
        "id": "1.13",
        "chapter": "1",
        "number": 13,
        "kind": "regular",
        "title": "Definition of a sequentially compact set in a metric space.",
        "nodeIds": [
          "sequential-compactness"
        ]
      },
      {
        "id": "1.14",
        "chapter": "1",
        "number": 14,
        "kind": "regular",
        "title": "Definition of a totally bounded set in a metric space.",
        "nodeIds": [
          "total-boundedness"
        ]
      },
      {
        "id": "1.15",
        "chapter": "1",
        "number": 15,
        "kind": "regular",
        "title": "Definition of a compact set in a metric space.",
        "nodeIds": [
          "compactness"
        ]
      },
      {
        "id": "1.16",
        "chapter": "1",
        "number": 16,
        "kind": "regular",
        "title": "Proof that the image of a compact metric space under a continuous function is compact.",
        "nodeIds": [
          "continuous-image-compact"
        ]
      },
      {
        "id": "1.17",
        "chapter": "1",
        "number": 17,
        "kind": "regular",
        "title": "Proof that a continuous real-valued function on a compact metric space attains its maximum and minimum.",
        "nodeIds": [
          "extreme-value"
        ]
      },
      {
        "id": "1.18",
        "chapter": "1",
        "number": 18,
        "kind": "regular",
        "title": "Definition of equivalent norms on a linear space.",
        "nodeIds": [
          "equivalent-norms"
        ]
      },
      {
        "id": "1.19",
        "chapter": "1",
        "number": 19,
        "kind": "regular",
        "title": "Definitions of the ℓᵖ norms and ℓᵖ spaces.",
        "nodeIds": [
          "lp-space",
          "linfinity-space"
        ]
      },
      {
        "id": "1.20",
        "chapter": "1",
        "number": 20,
        "kind": "regular",
        "title": "Young’s inequality with proof.",
        "nodeIds": [
          "young"
        ]
      },
      {
        "id": "1.21",
        "chapter": "1",
        "number": 21,
        "kind": "regular",
        "title": "Discrete Hölder’s inequality with proof.",
        "nodeIds": [
          "holder"
        ]
      },
      {
        "id": "1.22",
        "chapter": "1",
        "number": 22,
        "kind": "regular",
        "title": "Discrete Minkowski’s inequality with proof.",
        "nodeIds": [
          "minkowski"
        ]
      },
      {
        "id": "1.LF.1",
        "chapter": "1",
        "number": 1,
        "kind": "long-form",
        "title": "Proof that a function is continuous if and only if it is sequentially continuous.",
        "nodeIds": [
          "continuity-sequential-criterion"
        ]
      },
      {
        "id": "1.LF.2",
        "chapter": "1",
        "number": 2,
        "kind": "long-form",
        "title": "Proof that a set A in a metric space is closed if and only if it contains every limit of a convergent sequence in A.",
        "nodeIds": [
          "closed-sequential-criterion"
        ]
      },
      {
        "id": "1.LF.3",
        "chapter": "1",
        "number": 3,
        "kind": "long-form",
        "title": "Proof that every compact metric space is sequentially compact.",
        "nodeIds": [
          "compactness-equivalence"
        ]
      },
      {
        "id": "1.LF.4",
        "chapter": "1",
        "number": 4,
        "kind": "long-form",
        "title": "Proof that every sequentially compact metric space is totally bounded and complete.",
        "nodeIds": [
          "compactness-equivalence"
        ]
      },
      {
        "id": "1.LF.5",
        "chapter": "1",
        "number": 5,
        "kind": "long-form",
        "title": "Proof that all norms on a finite-dimensional linear space are equivalent, including all preceding lemmas.",
        "nodeIds": [
          "coordinate-norm-estimate",
          "finite-norm-equivalence"
        ]
      },
      {
        "id": "1.LF.6",
        "chapter": "1",
        "number": 6,
        "kind": "long-form",
        "title": "Proof that ℓ¹ is complete.",
        "nodeIds": [
          "lp-completeness"
        ],
        "note": "The card proves completeness for every finite p ≥ 1; take p = 1 for this question."
      },
      {
        "id": "2.1",
        "chapter": "2",
        "number": 1,
        "kind": "regular",
        "title": "Definitions of pointwise and uniform convergence for a sequence of functions.",
        "nodeIds": [
          "ch2-pointwise",
          "ch2-uniform-convergence"
        ]
      },
      {
        "id": "2.2",
        "chapter": "2",
        "number": 2,
        "kind": "regular",
        "title": "Definition of the supremum norm, also called the uniform norm.",
        "nodeIds": [
          "ch2-uniform-norm"
        ]
      },
      {
        "id": "2.3",
        "chapter": "2",
        "number": 3,
        "kind": "regular",
        "title": "Proof that a uniform limit of continuous functions is continuous.",
        "nodeIds": [
          "ch2-uniform-limit-continuous"
        ]
      },
      {
        "id": "2.4",
        "chapter": "2",
        "number": 4,
        "kind": "regular",
        "title": "Proof that C(K) is complete when K is a compact metric space.",
        "nodeIds": [
          "ch2-ck-banach"
        ]
      },
      {
        "id": "2.5",
        "chapter": "2",
        "number": 5,
        "kind": "regular",
        "title": "Definitions of the support of a continuous function and the spaces C_c(X), C_0(X), and C_b(X).",
        "nodeIds": [
          "ch2-support",
          "ch2-compact-support",
          "ch2-c0",
          "ch2-bounded-continuous"
        ]
      },
      {
        "id": "2.6",
        "chapter": "2",
        "number": 6,
        "kind": "regular",
        "title": "Proof of the limit–integral interchange property on a compact interval under uniform convergence.",
        "nodeIds": [
          "ch2-limit-integral"
        ]
      },
      {
        "id": "2.7",
        "chapter": "2",
        "number": 7,
        "kind": "regular",
        "title": "Definition of a Lipschitz function and the relationship between continuous and Lipschitz functions.",
        "nodeIds": [
          "ch2-lipschitz",
          "ch2-lipschitz-uniform"
        ]
      },
      {
        "id": "2.8",
        "chapter": "2",
        "number": 8,
        "kind": "regular",
        "title": "Statement of the Arzelà–Ascoli theorem, without proof.",
        "nodeIds": [
          "ch2-arzela-ascoli"
        ]
      },
      {
        "id": "2.9",
        "chapter": "2",
        "number": 9,
        "kind": "regular",
        "title": "Statement of the contraction mapping theorem, without proof.",
        "nodeIds": [
          "ch2-banach-fixed-point"
        ]
      },
      {
        "id": "2.LF.1",
        "chapter": "2",
        "number": 1,
        "kind": "long-form",
        "title": "Definition of equicontinuity and the Arzelà–Ascoli theorem with proof.",
        "nodeIds": [
          "ch2-equicontinuity",
          "ch2-arzela-ascoli"
        ]
      },
      {
        "id": "2.LF.2",
        "chapter": "2",
        "number": 2,
        "kind": "long-form",
        "title": "An example of a bounded set that is not precompact in C([0,1]) with the supremum norm.",
        "nodeIds": [
          "ch2-unit-ball"
        ]
      },
      {
        "id": "2.LF.3",
        "chapter": "2",
        "number": 3,
        "kind": "long-form",
        "title": "Proof that C¹([0,1]) is not closed in the supremum norm.",
        "nodeIds": [
          "ch2-smooth-sup-incomplete"
        ]
      },
      {
        "id": "2.LF.4",
        "chapter": "2",
        "number": 4,
        "kind": "long-form",
        "title": "Proof that C¹([0,1]) is complete in the C¹ norm.",
        "nodeIds": [
          "ch2-cm-banach"
        ],
        "note": "Use the m = 1 case of the card’s Cᵐ completeness proof."
      },
      {
        "id": "2.LF.5",
        "chapter": "2",
        "number": 5,
        "kind": "long-form",
        "title": "Definition of a contraction mapping and the contraction mapping theorem with proof.",
        "nodeIds": [
          "ch2-contraction",
          "ch2-banach-fixed-point"
        ]
      },
      {
        "id": "3.1",
        "chapter": "3",
        "number": 1,
        "kind": "regular",
        "title": "Construction of Peano–Jordan measure and definition of Peano–Jordan measurable sets.",
        "nodeIds": [
          "ch3-elementary-set",
          "ch3-jordan"
        ]
      },
      {
        "id": "3.2",
        "chapter": "3",
        "number": 2,
        "kind": "regular",
        "title": "Construction of Lebesgue measure and definition of Lebesgue measurable sets in ℝᵈ.",
        "nodeIds": [
          "ch3-elementary-set",
          "ch3-measurable-set"
        ]
      },
      {
        "id": "3.3",
        "chapter": "3",
        "number": 3,
        "kind": "regular",
        "title": "Definition of a measurable function.",
        "nodeIds": [
          "ch3-measurable-function"
        ]
      },
      {
        "id": "3.4",
        "chapter": "3",
        "number": 4,
        "kind": "regular",
        "title": "Definition of a simple function and construction of its Lebesgue integral.",
        "nodeIds": [
          "ch3-simple-function",
          "ch3-simple-integral"
        ]
      },
      {
        "id": "3.5",
        "chapter": "3",
        "number": 5,
        "kind": "regular",
        "title": "Construction of the Lebesgue integral for measurable functions, and definitions of the Lebesgue integral and a summable function.",
        "nodeIds": [
          "ch3-nonnegative-integral",
          "ch3-signed-integral"
        ]
      },
      {
        "id": "3.6",
        "chapter": "3",
        "number": 6,
        "kind": "regular",
        "title": "Statement of Beppo Levi’s theorem, without proof.",
        "nodeIds": [
          "ch3-monotone-convergence"
        ]
      },
      {
        "id": "3.7",
        "chapter": "3",
        "number": 7,
        "kind": "regular",
        "title": "Statement of Fatou’s lemma, without proof.",
        "nodeIds": [
          "ch3-fatou"
        ]
      },
      {
        "id": "3.8",
        "chapter": "3",
        "number": 8,
        "kind": "regular",
        "title": "Statement of Lebesgue’s dominated convergence theorem, without proof.",
        "nodeIds": [
          "ch3-dominated-convergence"
        ]
      },
      {
        "id": "3.9",
        "chapter": "3",
        "number": 9,
        "kind": "regular",
        "title": "Definition of the Lᵖ norms for 1 ≤ p ≤ ∞.",
        "nodeIds": [
          "ch3-lp-quantity",
          "ch3-essential-supremum"
        ]
      },
      {
        "id": "3.10",
        "chapter": "3",
        "number": 10,
        "kind": "regular",
        "title": "Proof that ‖f‖_{L∞} is an essential upper bound, and proof that ‖f‖_{L∞} ≤ ‖f‖∞.",
        "nodeIds": [
          "ch3-essential-bound",
          "ch3-essential-supremum"
        ]
      },
      {
        "id": "3.11",
        "chapter": "3",
        "number": 11,
        "kind": "regular",
        "title": "Hölder’s inequality, without proof.",
        "nodeIds": [
          "ch3-holder"
        ]
      },
      {
        "id": "3.12",
        "chapter": "3",
        "number": 12,
        "kind": "regular",
        "title": "Minkowski’s inequality, without proof.",
        "nodeIds": [
          "ch3-minkowski"
        ]
      },
      {
        "id": "3.13",
        "chapter": "3",
        "number": 13,
        "kind": "regular",
        "title": "Construction of Lᵖ as a space of equivalence classes.",
        "nodeIds": [
          "ch3-equivalence-quotient",
          "ch3-lp-space"
        ]
      },
      {
        "id": "3.14",
        "chapter": "3",
        "number": 14,
        "kind": "regular",
        "title": "Definition of convergence in Lᵖ for a sequence of functions.",
        "nodeIds": [
          "ch3-lp-convergence"
        ]
      },
      {
        "id": "3.15",
        "chapter": "3",
        "number": 15,
        "kind": "regular",
        "title": "Statement of the Riesz–Fischer theorem.",
        "nodeIds": [
          "ch3-riesz-fischer",
          "ch3-ae-subsequence"
        ]
      },
      {
        "id": "3.16",
        "chapter": "3",
        "number": 16,
        "kind": "regular",
        "title": "Inclusion properties of Lᵖ(Ω) and Lᑫ(Ω) for p ≠ q: general domains versus domains of finite measure.",
        "nodeIds": [
          "ch3-finite-measure-embedding",
          "ch3-lp-no-global-inclusion"
        ]
      },
      {
        "id": "3.17",
        "chapter": "3",
        "number": 17,
        "kind": "regular",
        "title": "Definition of the spaces Lᵖ_loc.",
        "nodeIds": [
          "ch3-local-lp"
        ]
      },
      {
        "id": "3.18",
        "chapter": "3",
        "number": 18,
        "kind": "regular",
        "title": "Definition of convolution and statement of Young’s convolution inequality.",
        "nodeIds": [
          "ch3-convolution",
          "ch3-young-convolution"
        ]
      },
      {
        "id": "3.19",
        "chapter": "3",
        "number": 19,
        "kind": "regular",
        "title": "Definition of the support of a measurable function.",
        "nodeIds": [
          "ch3-essential-support"
        ]
      },
      {
        "id": "3.20",
        "chapter": "3",
        "number": 20,
        "kind": "regular",
        "title": "Relationship between the support of f ∗ g and the supports of f and g.",
        "nodeIds": [
          "ch3-support-convolution"
        ]
      },
      {
        "id": "3.21",
        "chapter": "3",
        "number": 21,
        "kind": "regular",
        "title": "Definition of the modulus of continuity of a uniformly continuous function.",
        "nodeIds": [
          "ch3-modulus"
        ]
      },
      {
        "id": "3.22",
        "chapter": "3",
        "number": 22,
        "kind": "regular",
        "title": "Formula for the derivative of a convolution.",
        "nodeIds": [
          "ch3-convolution-derivatives"
        ]
      },
      {
        "id": "3.23",
        "chapter": "3",
        "number": 23,
        "kind": "regular",
        "title": "Construction of standard mollifiers on ℝᵈ.",
        "nodeIds": [
          "ch3-mollifier"
        ]
      },
      {
        "id": "3.24",
        "chapter": "3",
        "number": 24,
        "kind": "regular",
        "title": "Statement of the Kolmogorov–Riesz–Fréchet theorem, without proof.",
        "nodeIds": [
          "ch3-kolmogorov-local"
        ],
        "note": "The course theorem concerns finite-measure restrictions for 1 ≤ p < ∞. Global compactness on all of ℝᵈ also needs uniform tail control."
      },
      {
        "id": "3.LF.1",
        "chapter": "3",
        "number": 1,
        "kind": "long-form",
        "title": "Proof that every Peano–Jordan measurable set is Lebesgue measurable, and a counterexample to the converse.",
        "nodeIds": [
          "ch3-jordan-lebesgue-agreement",
          "ch3-jordan-failure",
          "ch3-countable-null"
        ]
      },
      {
        "id": "3.LF.2",
        "chapter": "3",
        "number": 2,
        "kind": "long-form",
        "title": "Proof that every bounded nonnegative measurable function f that is zero outside a compact set admits two sequences of simple functions φ_k and ψ_k with φ_k ≤ f ≤ ψ_k for every k, both converging to f in the supremum norm.",
        "nodeIds": [
          "ch3-simple-approximation"
        ]
      },
      {
        "id": "3.LF.3",
        "chapter": "3",
        "number": 3,
        "kind": "long-form",
        "title": "Statement and proof of Beppo Levi’s theorem.",
        "nodeIds": [
          "ch3-monotone-convergence"
        ]
      },
      {
        "id": "3.LF.4",
        "chapter": "3",
        "number": 4,
        "kind": "long-form",
        "title": "Statement and proof of Fatou’s lemma.",
        "nodeIds": [
          "ch3-fatou"
        ]
      },
      {
        "id": "3.LF.5",
        "chapter": "3",
        "number": 5,
        "kind": "long-form",
        "title": "Two examples of strict inequality in Fatou’s lemma.",
        "nodeIds": [
          "ch3-concentration",
          "ch3-travelling-mass"
        ]
      },
      {
        "id": "3.LF.6",
        "chapter": "3",
        "number": 6,
        "kind": "long-form",
        "title": "Statement and proof of Lebesgue’s dominated convergence theorem.",
        "nodeIds": [
          "ch3-dominated-convergence"
        ]
      },
      {
        "id": "3.LF.7",
        "chapter": "3",
        "number": 7,
        "kind": "long-form",
        "title": "Hölder’s inequality with proof.",
        "nodeIds": [
          "ch3-holder"
        ]
      },
      {
        "id": "3.LF.8",
        "chapter": "3",
        "number": 8,
        "kind": "long-form",
        "title": "Minkowski’s inequality with proof, including proof that the functions with finite Lᵖ norm form a linear space.",
        "nodeIds": [
          "ch3-minkowski"
        ]
      },
      {
        "id": "3.LF.9",
        "chapter": "3",
        "number": 9,
        "kind": "long-form",
        "title": "Relationship between almost everywhere convergence and L¹ convergence.",
        "nodeIds": [
          "ch3-convergence-comparison",
          "ch3-ae-subsequence",
          "ch3-typewriter"
        ]
      },
      {
        "id": "3.LF.10",
        "chapter": "3",
        "number": 10,
        "kind": "long-form",
        "title": "Proof that the distance function x ↦ d(x,A) from a given set A is Lipschitz continuous.",
        "nodeIds": [
          "ch3-distance-lipschitz"
        ]
      },
      {
        "id": "3.LF.11",
        "chapter": "3",
        "number": 11,
        "kind": "long-form",
        "title": "Urysohn’s lemma with proof.",
        "nodeIds": [
          "ch3-cutoff"
        ]
      },
      {
        "id": "3.LF.12",
        "chapter": "3",
        "number": 12,
        "kind": "long-form",
        "title": "Density of simple functions and compactly supported continuous functions in Lᵖ, with proof.",
        "nodeIds": [
          "ch3-simple-density",
          "ch3-cc-density"
        ],
        "note": "These density statements are for 1 ≤ p < ∞; continuous compactly supported functions are not dense in L∞ in general."
      },
      {
        "id": "3.LF.13",
        "chapter": "3",
        "number": 13,
        "kind": "long-form",
        "title": "Proof that L∞(ℝᵈ) is not separable.",
        "nodeIds": [
          "ch3-linfinity-nonseparable"
        ]
      },
      {
        "id": "3.LF.14",
        "chapter": "3",
        "number": 14,
        "kind": "long-form",
        "title": "Young’s convolution inequality with proof.",
        "nodeIds": [
          "ch3-young-convolution"
        ]
      },
      {
        "id": "3.LF.15",
        "chapter": "3",
        "number": 15,
        "kind": "long-form",
        "title": "Definition of the support of a measurable function; proof that the function is zero almost everywhere outside its support; and proof that support is invariant under modification on null sets.",
        "nodeIds": [
          "ch3-essential-support"
        ]
      },
      {
        "id": "3.LF.16",
        "chapter": "3",
        "number": 16,
        "kind": "long-form",
        "title": "Proof that f ∈ C_c and g ∈ L¹_loc imply that f ∗ g is continuous.",
        "nodeIds": [
          "ch3-convolution-continuity"
        ]
      },
      {
        "id": "3.LF.17",
        "chapter": "3",
        "number": 17,
        "kind": "long-form",
        "title": "Proof that f ∈ C¹_c and g ∈ L¹_loc imply that f ∗ g is differentiable.",
        "nodeIds": [
          "ch3-convolution-derivatives"
        ]
      },
      {
        "id": "3.LF.18",
        "chapter": "3",
        "number": 18,
        "kind": "long-form",
        "title": "Proof that convolving a continuous function f with standard mollifiers converges to f uniformly on compact sets.",
        "nodeIds": [
          "ch3-mollifier-uniform"
        ]
      },
      {
        "id": "3.LF.19",
        "chapter": "3",
        "number": 19,
        "kind": "long-form",
        "title": "Proof that convolving an Lᵖ function f with standard mollifiers converges to f in Lᵖ.",
        "nodeIds": [
          "ch3-mollifier-lp"
        ],
        "note": "The norm convergence theorem is for 1 ≤ p < ∞; it fails for general L∞ functions."
      },
      {
        "id": "3.LF.20",
        "chapter": "3",
        "number": 20,
        "kind": "long-form",
        "title": "Proof that if Ω is open, f ∈ L¹_loc(Ω), and ∫_Ω fφ dx = 0 for every φ ∈ C∞_c(Ω), then f = 0 almost everywhere on Ω.",
        "nodeIds": [
          "ch3-test-functions-detect"
        ]
      },
      {
        "id": "3.LF.21",
        "chapter": "3",
        "number": 21,
        "kind": "long-form",
        "title": "Statement and proof of the Kolmogorov–Riesz–Fréchet theorem.",
        "nodeIds": [
          "ch3-kolmogorov-local"
        ],
        "note": "The course theorem concerns finite-measure restrictions for 1 ≤ p < ∞. Global compactness on all of ℝᵈ also needs uniform tail control."
      }
    ]
  }
};
