/**
 * Synthesizes a delicate, pleasant acoustic unlock chime using the browser's Web Audio API.
 * Completely client-side and requires no external audio assets.
 */
export function playUnlockSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // Harmonic chord: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz), B5 (987.77Hz), C6 (1046.50Hz)
    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.65);
    });
  } catch (err) {
    // Graceful fallback if Web Audio is muted/blocked
    console.debug('Audio not supported or permitted', err);
  }
}

/**
 * Creates an elegant particle burst on a canvas when the page is unlocked.
 */
export function triggerUnlockConfetti(canvas: HTMLCanvasElement | null) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ['#A7EBF2', '#54ACBF', '#26658C', '#ffffff', '#7dd3fc', '#e0f2fe'];
  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    alpha: number;
    rotation: number;
    vRot: number;
    shape: 'rect' | 'circle' | 'star';
  }> = [];

  const count = 120;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 12;
    particles.push({
      x: width / 2,
      y: height / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      shape: Math.random() > 0.6 ? 'star' : Math.random() > 0.3 ? 'rect' : 'circle'
    });
  }

  let animationFrameId: number;
  const startTime = performance.now();

  function render(time: number) {
    const elapsed = time - startTime;
    ctx!.clearRect(0, 0, width, height);

    let alive = false;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.vx *= 0.98; // air drag
      p.rotation += p.vRot;
      p.alpha = Math.max(0, 1 - elapsed / 2200);

      if (p.alpha > 0.01) {
        alive = true;
        ctx!.save();
        ctx!.globalAlpha = p.alpha;
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else if (p.shape === 'circle') {
          ctx!.beginPath();
          ctx!.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx!.fill();
        } else {
          // simple 4-point sparkle star
          ctx!.beginPath();
          ctx!.moveTo(0, -p.size);
          ctx!.lineTo(p.size * 0.3, -p.size * 0.3);
          ctx!.lineTo(p.size, 0);
          ctx!.lineTo(p.size * 0.3, p.size * 0.3);
          ctx!.lineTo(0, p.size);
          ctx!.lineTo(-p.size * 0.3, p.size * 0.3);
          ctx!.lineTo(-p.size, 0);
          ctx!.lineTo(-p.size * 0.3, -p.size * 0.3);
          ctx!.closePath();
          ctx!.fill();
        }

        ctx!.restore();
      }
    }

    if (alive && elapsed < 2500) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      ctx!.clearRect(0, 0, width, height);
    }
  }

  animationFrameId = requestAnimationFrame(render);
  return () => cancelAnimationFrame(animationFrameId);
}
