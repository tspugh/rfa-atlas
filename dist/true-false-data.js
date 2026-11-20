window.RFA_TF = [
  {
    "id": "s1-01",
    "sheet": 1,
    "number": 1,
    "statement": "In $\\mathbb R$ with the Euclidean distance, $(0,+\\infty)$ is the closure of some set $A\\subset\\mathbb R$.",
    "answer": false,
    "reason": "Every closure is closed. But $1/n\\in(0,+\\infty)$ converges to $0\\notin(0,+\\infty)$, so this interval is not closed."
  },
  {
    "id": "s1-02",
    "sheet": 1,
    "number": 2,
    "statement": "In a metric space $(X,d)$, for fixed $x_0\\in X$, the function $x\\mapsto d(x,x_0)$ is continuous.",
    "answer": true,
    "reason": "The reverse triangle inequality gives $|d(x,x_0)-d(y,x_0)|\\le d(x,y)$. Thus the distance function is even 1-Lipschitz; choose $\\delta=\\varepsilon$."
  },
  {
    "id": "s1-03",
    "sheet": 1,
    "number": 3,
    "statement": "In a metric space, any bounded sequence has a convergent subsequence.",
    "answer": false,
    "reason": "Take $\\mathbb N$ with the discrete metric $d(m,n)=1$ for $m\\ne n$. The sequence $x_n=n$ is bounded, but no subsequence is Cauchy, hence none converges."
  },
  {
    "id": "s1-04",
    "sheet": 1,
    "number": 4,
    "statement": "In any metric space $X$, a subset $A\\subset X$ is either open or closed.",
    "answer": false,
    "reason": "In $\\mathbb R$, the set $[0,1)$ is neither open nor closed: $0$ is not an interior point and $1$ is a missing limit point. Some other sets are both open and closed."
  },
  {
    "id": "s1-05",
    "sheet": 1,
    "number": 5,
    "statement": "A subset of a metric space is compact if and only if it is closed and bounded.",
    "answer": false,
    "reason": "Compact subsets of metric spaces are closed and bounded, but the converse fails. The whole infinite discrete space $(\\mathbb N,d)$ is closed and bounded; its cover by singleton open sets has no finite subcover."
  },
  {
    "id": "s1-06",
    "sheet": 1,
    "number": 6,
    "statement": "Let $K$ be a compact metric space, $Y$ a metric space and $f:K\\to Y$. Then $f(K)$ is bounded in $Y$.",
    "answer": false,
    "reason": "Continuity is not assumed. On $K=[0,1]$, define $f(0)=0$ and $f(x)=1/x$ for $x>0$. Its image in $\\mathbb R$ is unbounded. With continuity, the image would be compact and therefore bounded."
  },
  {
    "id": "s1-07",
    "sheet": 1,
    "number": 7,
    "statement": "In a metric space, an arbitrary intersection of closed sets is closed.",
    "answer": true,
    "reason": "The complement of an intersection of closed sets is a union of their open complements. Arbitrary unions of open sets are open."
  },
  {
    "id": "s1-08",
    "sheet": 1,
    "number": 8,
    "statement": "In a normed linear space $(X,\\|\\cdot\\|)$, the set $\\{x:\\|x\\|\\le1\\}$ is convex.",
    "answer": true,
    "reason": "For $\\|x\\|,\\|y\\|\\le1$ and $t\\in[0,1]$, the triangle inequality and homogeneity give $\\|tx+(1-t)y\\|\\le t\\|x\\|+(1-t)\\|y\\|\\le1$."
  },
  {
    "id": "s1-09",
    "sheet": 1,
    "number": 9,
    "statement": "Every subset $A$ of a normed linear space is a normed linear space with the same norm.",
    "answer": false,
    "reason": "A subset need not be a vector subspace. For example, $A=[0,1]\\subset\\mathbb R$ is not closed under addition or scalar multiplication, so it is not a normed linear space with the inherited operations."
  },
  {
    "id": "s1-10",
    "sheet": 1,
    "number": 10,
    "statement": "Every subset $A$ of a normed linear space is a metric space with the distance induced by the norm.",
    "answer": true,
    "reason": "Restrict $d(x,y)=\\|x-y\\|$ to $A\\times A$. Nonnegativity, separation, symmetry and the triangle inequality all remain valid. No vector-space structure on $A$ is needed."
  },
  {
    "id": "s1-11",
    "sheet": 1,
    "number": 11,
    "statement": "Every continuous function $f:\\mathbb R\\to\\mathbb R$ is uniformly continuous.",
    "answer": false,
    "reason": "Take $f(x)=x^2$, $x_n=n$ and $y_n=n+1/n$. Then $|x_n-y_n|\\to0$ but $|f(y_n)-f(x_n)|=2+1/n^2\\ge2$."
  },
  {
    "id": "s1-12",
    "sheet": 1,
    "number": 12,
    "statement": "Every continuous function $f:[0,1]\\to\\mathbb R$ is uniformly continuous.",
    "answer": true,
    "reason": "The interval $[0,1]$ is compact. The Heine–Cantor theorem states that a continuous map from a compact metric space into a metric space is uniformly continuous."
  },
  {
    "id": "s1-13",
    "sheet": 1,
    "number": 13,
    "statement": "In a compact metric space, every Cauchy sequence converges.",
    "answer": true,
    "reason": "Compactness gives a convergent subsequence $x_{n_k}\\to x$. The Cauchy property then forces the whole sequence to converge to $x$, by $d(x_n,x)\\le d(x_n,x_{n_k})+d(x_{n_k},x)$."
  },
  {
    "id": "s1-14",
    "sheet": 1,
    "number": 14,
    "statement": "Let $X$ be finite dimensional and $d_1,d_2$ be two metrics on $X$. If $d_1(x_n,x)\\to0$, then $d_2(x_n,x)\\to0$.",
    "answer": false,
    "reason": "On $X=\\mathbb R$, use the Euclidean metric $d_1$ and the discrete metric $d_2$. Then $x_n=1/n\\to0$ for $d_1$, while $d_2(x_n,0)=1$. Finite-dimensional equivalence applies to norms, not arbitrary metrics."
  },
  {
    "id": "s1-15",
    "sheet": 1,
    "number": 15,
    "statement": "For fixed $r>0$, the set $A=\\{q/r:q\\in\\mathbb Q\\}$ is dense in $\\mathbb R$ with its standard topology.",
    "answer": true,
    "reason": "Given $x\\in\\mathbb R$ and $\\varepsilon>0$, choose $q\\in\\mathbb Q$ with $|q-rx|<r\\varepsilon$. Then $|q/r-x|<\\varepsilon$."
  },
  {
    "id": "s1-16",
    "sheet": 1,
    "number": 16,
    "statement": "The normed linear space $(\\mathbb R^n,\\|\\cdot\\|_1)$, where $\\|x\\|_1=\\sum_{i=1}^n|x_i|$, is complete.",
    "answer": true,
    "reason": "A Cauchy sequence in $\\|\\cdot\\|_1$ is Cauchy in every coordinate, since $|x_i-y_i|\\le\\|x-y\\|_1$. Completeness of $\\mathbb R$ gives coordinate limits; the finite sum of coordinate errors tends to zero."
  },
  {
    "id": "s2-01",
    "sheet": 2,
    "number": 1,
    "statement": "The space $(C_c(\\mathbb R),\\|\\cdot\\|_\\infty)$ is complete.",
    "answer": false,
    "reason": "Let $\\chi_n$ be continuous, equal to 1 on $[-n,n]$, zero outside $[-n-1,n+1]$, and between 0 and 1. Then $\\chi_n(x)e^{-|x|}\\in C_c(\\mathbb R)$ converges uniformly to $e^{-|x|}$, with error at most $e^{-n}$. The limit is not compactly supported."
  },
  {
    "id": "s2-02",
    "sheet": 2,
    "number": 2,
    "statement": "The space $(C_b([-1,1]),\\|\\cdot\\|_\\infty)$ is complete.",
    "answer": true,
    "reason": "Every continuous function on the compact interval is bounded, so this is $C([-1,1])$. A uniformly Cauchy sequence has a uniform limit, and uniform limits preserve continuity."
  },
  {
    "id": "s2-03",
    "sheet": 2,
    "number": 3,
    "statement": "If $K$ is a compact metric space, then $C_c(K)=C(K)$.",
    "answer": true,
    "reason": "The support of a continuous function is closed in $K$, hence compact. Thus every continuous function on $K$ has compact support relative to $K$."
  },
  {
    "id": "s2-04",
    "sheet": 2,
    "number": 4,
    "statement": "$A=\\{f\\in C([0,1]):\\|f\\|_\\infty\\le1\\}$ is compact in the uniform norm.",
    "answer": false,
    "reason": "The functions $f_n(x)=x^n$ lie in $A$. Every subsequence has pointwise limit 0 on $[0,1)$ and 1 at 1. This discontinuous limit cannot be a uniform limit of continuous functions, so no subsequence converges uniformly."
  },
  {
    "id": "s2-05",
    "sheet": 2,
    "number": 5,
    "statement": "$B=\\{f\\in C^1([0,1]):\\|f\\prime\\|_\\infty\\le1\\}$ is equicontinuous.",
    "answer": true,
    "reason": "The mean value theorem gives $|f(x)-f(y)|\\le|x-y|$ for every $f\\in B$. The same choice $\\delta=\\varepsilon$ works for the entire family."
  },
  {
    "id": "s2-06",
    "sheet": 2,
    "number": 6,
    "statement": "Every $f\\in C([0,1])$ is a uniform limit of a sequence of $C^\\infty$ functions.",
    "answer": true,
    "reason": "By the Weierstrass approximation theorem, there are polynomials $p_n$ converging uniformly to $f$. Polynomials are $C^\\infty$, even on all of $\\mathbb R$."
  },
  {
    "id": "s2-07",
    "sheet": 2,
    "number": 7,
    "statement": "Every pointwise convergent sequence in $C([0,1])$ converges uniformly.",
    "answer": false,
    "reason": "For $f_n(x)=x^n$, the pointwise limit is 0 for $x<1$ and 1 at $x=1$. It is discontinuous, whereas a uniform limit of continuous functions must be continuous."
  },
  {
    "id": "s2-08",
    "sheet": 2,
    "number": 8,
    "statement": "The set of Lipschitz functions on $[0,1]$ is closed in $(C([0,1]),\\|\\cdot\\|_\\infty)$.",
    "answer": false,
    "reason": "Take $f_n(x)=\\sqrt{x+1/n}$. Each is Lipschitz since its derivative is bounded. Also $\\|f_n-\\sqrt{x}\\|_\\infty\\le1/\\sqrt n$. But $\\sqrt{x}$ is not Lipschitz at 0, since $\\sqrt{x}/x\\to\\infty$."
  },
  {
    "id": "s2-09",
    "sheet": 2,
    "number": 9,
    "statement": "The set of polynomials on $[0,1]$ is closed in the uniform norm.",
    "answer": false,
    "reason": "The Taylor polynomials of $e^x$ converge uniformly on $[0,1]$ to $e^x$, which is not a polynomial. More generally, polynomials are dense in $C([0,1])$ by Weierstrass."
  },
  {
    "id": "s2-10",
    "sheet": 2,
    "number": 10,
    "statement": "Every bounded set in $(C([0,1]),\\|\\cdot\\|_\\infty)$ is precompact.",
    "answer": false,
    "reason": "The bounded family $\\{x^n:n\\ge1\\}$ has no uniformly convergent subsequence, since every subsequence has the same discontinuous pointwise limit. Its closure is therefore not compact."
  },
  {
    "id": "s2-11",
    "sheet": 2,
    "number": 11,
    "statement": "On every metric space $X$, $\\|f\\|_\\infty=\\sup_{x\\in X}|f(x)|$ defines a norm on all continuous functions on $X$.",
    "answer": false,
    "reason": "It may be infinite. On $X=\\mathbb R$, the continuous function $f(x)=x$ has infinite supremum. This formula defines a norm on $C_b(X)$, the bounded continuous functions."
  },
  {
    "id": "s2-12",
    "sheet": 2,
    "number": 12,
    "statement": "$C_0(\\mathbb R)$ is closed in $C_b(\\mathbb R)$ with the uniform norm.",
    "answer": true,
    "reason": "Here $C_0$ means continuous functions vanishing at infinity. If $f_n\\to f$ uniformly, choose $n$ with $\\|f-f_n\\|_\\infty<\\varepsilon/2$, then $R$ so that $|f_n(x)|<\\varepsilon/2$ for $|x|>R$. Thus $|f(x)|<\\varepsilon$ outside $[-R,R]$."
  },
  {
    "id": "s2-13",
    "sheet": 2,
    "number": 13,
    "statement": "$C^1([0,1])$ is closed in $C([0,1])$ with the uniform norm.",
    "answer": false,
    "reason": "The smooth functions $f_n(x)=\\sqrt{(x-1/2)^2+1/n}$ converge uniformly to $|x-1/2|$, with error at most $1/\\sqrt n$. The limit is not differentiable at $1/2$."
  },
  {
    "id": "s2-14",
    "sheet": 2,
    "number": 14,
    "statement": "Every Lipschitz function on $\\mathbb R$ is continuously differentiable.",
    "answer": false,
    "reason": "The function $f(x)=|x|$ is 1-Lipschitz by the reverse triangle inequality, but it is not differentiable at 0."
  },
  {
    "id": "s2-15",
    "sheet": 2,
    "number": 15,
    "statement": "Every continuously differentiable function on $[0,1]$ is Lipschitz.",
    "answer": true,
    "reason": "The continuous derivative is bounded on the compact interval. The mean value theorem gives $|f(x)-f(y)|\\le\\|f\\prime\\|_\\infty|x-y|$."
  },
  {
    "id": "s3-01",
    "sheet": 3,
    "number": 1,
    "statement": "$f(x)=x/(1+x^2)$ belongs to $L^2(\\mathbb R)$.",
    "answer": true,
    "reason": "For $|x|\\le1$, $|f(x)|^2\\le x^2$; for $|x|\\ge1$, $|f(x)|^2\\le1/x^2$. Both bounds are integrable on their respective regions."
  },
  {
    "id": "s3-02",
    "sheet": 3,
    "number": 2,
    "statement": "$L^2([0,+\\infty))\\subset L^1([0,+\\infty))$.",
    "answer": false,
    "reason": "Take $f(x)=1/(1+x)$. Its square has integral 1 on $[0,\\infty)$, but $\\int_0^\\infty f(x)\\,dx=\\infty$. The domain has infinite measure."
  },
  {
    "id": "s3-03",
    "sheet": 3,
    "number": 3,
    "statement": "$C([0,1])\\subset L^1([0,1])$.",
    "answer": true,
    "reason": "A continuous function on $[0,1]$ is measurable and bounded, so $\\int_0^1|f(x)|\\,dx\\le\\|f\\|_\\infty<\\infty$. As usual, the inclusion identifies continuous functions with their almost-everywhere equivalence classes."
  },
  {
    "id": "s3-04",
    "sheet": 3,
    "number": 4,
    "statement": "$C([0,+\\infty))\\subset L^\\infty([0,+\\infty))$.",
    "answer": false,
    "reason": "The continuous function $f(x)=x$ is not essentially bounded: for every $M>0$, the set where $f(x)>M$ has positive measure."
  },
  {
    "id": "s3-05",
    "sheet": 3,
    "number": 5,
    "statement": "$L^6(\\mathbb R)\\subset L^4(\\mathbb R)$.",
    "answer": false,
    "reason": "Take $f(x)=(1+|x|)^{-1/5}$. Its sixth power has integrable tails, with exponent $6/5>1$, but its fourth power has divergent integral, since $4/5<1$."
  },
  {
    "id": "s3-06",
    "sheet": 3,
    "number": 6,
    "statement": "$f_n(x)=x^n$ converges to zero almost everywhere on $(-1,1)$.",
    "answer": true,
    "reason": "For every $x\\in(-1,1)$, $|x|<1$, so $|x|^n\\to0$. Convergence holds everywhere on this open interval."
  },
  {
    "id": "s3-07",
    "sheet": 3,
    "number": 7,
    "statement": "$f_n(x)=e^{-n|x|}$ converges to zero in $L^2([-1,1])$.",
    "answer": true,
    "reason": "$\\|f_n\\|_2^2=2\\int_0^1e^{-2nx}\\,dx=(1-e^{-2n})/n\\to0$. The value $f_n(0)=1$ does not prevent convergence in $L^2$."
  },
  {
    "id": "s3-08",
    "sheet": 3,
    "number": 8,
    "statement": "$f_n(x)=e^{-nx}$ converges to zero in $L^2([0,+\\infty))$.",
    "answer": true,
    "reason": "$\\|f_n\\|_2^2=\\int_0^\\infty e^{-2nx}\\,dx=1/(2n)\\to0$."
  },
  {
    "id": "s3-09",
    "sheet": 3,
    "number": 9,
    "statement": "$f_n(x)=e^{-n|x|}$ converges to zero in $L^\\infty([-1,1])$.",
    "answer": false,
    "reason": "$\\|f_n\\|_\\infty=1$ for every $n$. This is an essential supremum: for every $0<a<1$, $f_n>a$ on a positive-length interval around 0, so the obstruction is not just its value at one point."
  },
  {
    "id": "s3-10",
    "sheet": 3,
    "number": 10,
    "statement": "Every countable subset of $\\mathbb R^d$ is Lebesgue measurable.",
    "answer": true,
    "reason": "Each singleton is closed and has Lebesgue measure zero. A countable union of singletons is measurable and still has measure zero."
  },
  {
    "id": "s3-11",
    "sheet": 3,
    "number": 11,
    "statement": "If $f_n\\to f$ in $L^1(\\mathbb R)$, then $f_n\\to f$ almost everywhere on $\\mathbb R$.",
    "answer": false,
    "reason": "Use the typewriter sequence: for $k\\ge0$ and $0\\le j<2^k$, let $f_{2^k+j}=\\mathbf1_{[j2^{-k},(j+1)2^{-k})}$, extended by zero outside $[0,1)$. Its $L^1$ norm is $2^{-k}\\to0$, but each point of $[0,1)$ sees infinitely many 1s and 0s. An almost-everywhere convergent subsequence does exist."
  },
  {
    "id": "s3-12",
    "sheet": 3,
    "number": 12,
    "statement": "If measurable $f_n,f$ on $\\mathbb R$ satisfy $f_n\\to f$ almost everywhere, then $\\int f_n\\,dx\\to\\int f\\,dx$.",
    "answer": false,
    "reason": "Take $f_n=n\\mathbf1_{(0,1/n)}$. Then $f_n\\to0$ everywhere, but $\\int_{\\mathbb R}f_n\\,dx=1$ for every $n$. Almost-everywhere convergence alone gives no integrable domination."
  },
  {
    "id": "s3-13",
    "sheet": 3,
    "number": 13,
    "statement": "$f_n(x)=\\arctan(nx)$ converges in $L^1(\\mathbb R)$.",
    "answer": false,
    "reason": "For each $n\\ge1$, $|\\arctan(nx)|\\to\\pi/2$ as $|x|\\to\\infty$, so $f_n\\notin L^1(\\mathbb R)$. It is not even a sequence of elements of that space. Its pointwise limit away from 0 is also nonintegrable."
  },
  {
    "id": "s3-14",
    "sheet": 3,
    "number": 14,
    "statement": "$f(x)=x^2/(1+x^4)$ belongs to $L^1(\\mathbb R)$.",
    "answer": true,
    "reason": "For $|x|\\le1$, $0\\le f(x)\\le x^2$; for $|x|\\ge1$, $f(x)\\le1/x^2$. These bounds are integrable near zero and at infinity, respectively."
  },
  {
    "id": "s3-15",
    "sheet": 3,
    "number": 15,
    "statement": "$L^\\infty(\\mathbb R)\\subset L^2(\\mathbb R)$.",
    "answer": false,
    "reason": "The constant function $f=1$ is essentially bounded, but $\\int_{\\mathbb R}|f|^2\\,dx=\\infty$."
  },
  {
    "id": "s3-16",
    "sheet": 3,
    "number": 16,
    "statement": "The space $L^\\infty([-1,1])$ is separable.",
    "answer": false,
    "reason": "The uncountable family $\\{\\mathbf1_{[-1,t]}:-1<t<1\\}$ has pairwise $L^\\infty$ distance 1. The open balls of radius $1/3$ about these elements are pairwise disjoint. A countable dense set would have to meet every one, which is impossible."
  },
  {
    "id": "s3-17",
    "sheet": 3,
    "number": 17,
    "statement": "Every Lebesgue measurable set in $\\mathbb R$ is Peano–Jordan measurable.",
    "answer": false,
    "reason": "Take $A=\\mathbb Q\\cap[0,1]$. It is countable, hence Lebesgue measurable, but its boundary is $[0,1]$, of positive measure. A bounded set is Jordan measurable exactly when its boundary has measure zero."
  },
  {
    "id": "s3-18",
    "sheet": 3,
    "number": 18,
    "statement": "Every Peano–Jordan measurable set in $\\mathbb R$ is Lebesgue measurable.",
    "answer": true,
    "reason": "A Jordan measurable set is bounded and has boundary of measure zero. It is the union of its open interior and a subset of this null boundary. Both parts are Lebesgue measurable, since Lebesgue measure is complete."
  }
];
